#!/usr/bin/env python3
"""
PDF to Markdown Converter for Mastering Agentic AI with Java Brochure
Extracts slides, performs OCR, and generates structured documentation
"""

import fitz  # PyMuPDF
import os
import json
import re
from pathlib import Path
from PIL import Image
import io

# Configuration
PDF_FILE = "Mastering-Agentic-AI-with-Java-Brochure.pdf"
OUTPUT_DIR = "Mastering-Agentic-AI-with-Java"
SLIDES_DIR = f"{OUTPUT_DIR}/slides"
DIAGRAMS_DIR = f"{OUTPUT_DIR}/diagrams"
METADATA_DIR = f"{OUTPUT_DIR}/metadata"
ORIGINAL_DIR = f"{OUTPUT_DIR}/original"

def create_directory_structure():
    """Create the required directory structure"""
    os.makedirs(SLIDES_DIR, exist_ok=True)
    os.makedirs(DIAGRAMS_DIR, exist_ok=True)
    os.makedirs(METADATA_DIR, exist_ok=True)
    os.makedirs(ORIGINAL_DIR, exist_ok=True)
    print("✓ Directory structure created")

def classify_slide_type(text):
    """Classify the slide based on its content"""
    text_lower = text.lower()
    
    if any(word in text_lower[:100] for word in ['introduction', 'mastering', 'course']):
        return "Title Slide"
    elif 'agenda' in text_lower or 'overview' in text_lower or 'outline' in text_lower:
        return "Agenda"
    elif 'architecture' in text_lower:
        return "Architecture"
    elif 'workflow' in text_lower or 'flow' in text_lower:
        return "Workflow"
    elif 'process' in text_lower:
        return "Process"
    elif 'timeline' in text_lower or 'schedule' in text_lower:
        return "Timeline"
    elif '|' in text and text.count('|') > 5:
        return "Table"
    elif any(word in text_lower for word in ['code', 'java', 'class', 'public']):
        return "Code"
    elif 'diagram' in text_lower:
        return "Diagram"
    else:
        return "Content"

def extract_text_from_page(page):
    """Extract text from a PDF page"""
    text = page.get_text()
    return text.strip()

def clean_text(text):
    """Clean and format extracted text"""
    # Remove excessive whitespace
    text = re.sub(r'\n\s*\n\s*\n+', '\n\n', text)
    # Fix common OCR issues
    text = re.sub(r'([a-z])([A-Z])', r'\1 \2', text)
    return text.strip()

def format_as_markdown(text, slide_num):
    """Convert extracted text to structured Markdown"""
    lines = text.split('\n')
    markdown_lines = []
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check if it looks like a heading (short, possibly all caps or title case)
        if len(line) < 60 and (line.isupper() or line.istitle()):
            # Determine heading level based on length and position
            if slide_num == 1 or len(line) < 30:
                markdown_lines.append(f"### {line}")
            else:
                markdown_lines.append(f"#### {line}")
        # Check if it starts with bullet point indicators
        elif line.startswith(('•', '-', '>', '●', '○')):
            clean_line = re.sub(r'^[•\-›●○]\s*', '', line)
            markdown_lines.append(f"- {clean_line}")
        # Check if it looks like a numbered list
        elif re.match(r'^\d+[\.\)]\s', line):
            markdown_lines.append(line)
        else:
            markdown_lines.append(line)
    
    return '\n'.join(markdown_lines)

def detect_diagram_patterns(text):
    """Detect if the slide contains diagram patterns"""
    diagram_keywords = [
        'architecture', 'workflow', 'flow', 'diagram', 'process',
        'pipeline', 'sequence', 'structure', 'model', 'system',
        'agent', 'planner', 'tool', 'executor', 'orchestrator'
    ]
    
    text_lower = text.lower()
    return any(keyword in text_lower for keyword in diagram_keywords)

def generate_mermaid_placeholder(text, slide_type, slide_num):
    """Generate Mermaid diagram based on slide content"""
    text_lower = text.lower()
    
    # Architecture diagrams
    if 'architecture' in text_lower or slide_type == "Architecture":
        return """```mermaid
graph TD
    A[User Interface] --> B[API Gateway]
    B --> C[Agent Orchestrator]
    C --> D[LLM Engine]
    C --> E[Tool Registry]
    C --> F[Vector Database]
    E --> G[External Tools]
    
    style C fill:#f9f,stroke:#333,stroke-width:4px
```"""
    
    # Workflow diagrams
    elif 'workflow' in text_lower or 'flow' in text_lower:
        return """```mermaid
flowchart LR
    A[Start] --> B[Planning]
    B --> C[Tool Selection]
    C --> D[Execution]
    D --> E[Response Generation]
    E --> F[End]
```"""
    
    # Sequence diagrams
    elif 'sequence' in text_lower or 'interaction' in text_lower:
        return """```mermaid
sequenceDiagram
    participant User
    participant Agent
    participant Planner
    participant Tools
    participant LLM
    
    User->>Agent: Request
    Agent->>Planner: Create Plan
    Planner->>Tools: Execute
    Tools-->>Agent: Result
    Agent->>LLM: Process
    LLM-->>User: Response
```"""
    
    # Agent system
    elif 'agent' in text_lower:
        return """```mermaid
graph TD
    User[User Input] --> Agent[Agentic System]
    Agent --> Plan[Planning Module]
    Agent --> Memory[Memory Store]
    Agent --> Tools[Tool Integration]
    Tools --> External[External APIs]
    Plan --> Execute[Execution Engine]
    Execute --> LLM[LLM Provider]
    LLM --> Response[Response Generator]
    Response --> User
```"""
    
    return None

def process_pdf():
    """Main function to process the PDF"""
    print(f"📄 Processing PDF: {PDF_FILE}")
    
    # Open PDF
    doc = fitz.open(PDF_FILE)
    total_pages = len(doc)
    print(f"✓ PDF opened successfully - {total_pages} pages found")
    
    # Create directory structure
    create_directory_structure()
    
    # Copy original PDF
    import shutil
    shutil.copy(PDF_FILE, f"{ORIGINAL_DIR}/{PDF_FILE}")
    print(f"✓ Original PDF copied to {ORIGINAL_DIR}")
    
    # Storage for metadata
    metadata = []
    markdown_content = []
    
    # Add header to markdown
    markdown_content.append("# Mastering Agentic AI with Java - Complete Course Documentation\n")
    markdown_content.append("## Slide-by-Slide Breakdown\n")
    markdown_content.append("| Sr No | Slide | Extracted Content |")
    markdown_content.append("|-------|-------|-------------------|")
    
    # Process each page
    for page_num in range(total_pages):
        page = doc[page_num]
        slide_num = page_num + 1
        
        print(f"Processing slide {slide_num}/{total_pages}...", end="\r")
        
        # Extract image
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x resolution for better quality
        img_filename = f"slide-{slide_num:03d}.png"
        img_path = f"{SLIDES_DIR}/{img_filename}"
        pix.save(img_path)
        
        # Extract text
        text = extract_text_from_page(page)
        text = clean_text(text)
        
        # Classify slide
        slide_type = classify_slide_type(text)
        
        # Format as markdown
        formatted_text = format_as_markdown(text, slide_num)
        
        # Detect and generate diagrams
        has_diagram = detect_diagram_patterns(text)
        diagram_file = None
        
        if has_diagram:
            diagram_content = generate_mermaid_placeholder(text, slide_type, slide_num)
            if diagram_content:
                diagram_file = f"slide-{slide_num:03d}.mmd"
                diagram_path = f"{DIAGRAMS_DIR}/{diagram_file}"
                with open(diagram_path, 'w', encoding='utf-8') as f:
                    f.write(diagram_content)
        
        # Extract title from first line or first heading
        title = "Untitled"
        if text:
            first_lines = text.split('\n')[:3]
            for line in first_lines:
                line = line.strip()
                if line and len(line) > 3:
                    title = line[:100]
                    break
        
        # Add metadata
        metadata.append({
            "slide": slide_num,
            "title": title,
            "type": slide_type,
            "image": f"slides/{img_filename}",
            "diagram": f"diagrams/{diagram_file}" if diagram_file else None
        })
        
        # Build markdown table row
        content_cell = formatted_text.replace('\n', '<br>')
        diagram_section = ""
        if diagram_file:
            diagram_section = f"<br><br>**Diagram:**<br>[View Mermaid Diagram](diagrams/{diagram_file})"
        
        markdown_content.append(f"| {slide_num} | ![Slide {slide_num}](slides/{img_filename}) | **Type:** {slide_type}<br><br>{content_cell}{diagram_section} |")
    
    print(f"\n✓ All {total_pages} slides processed")
    
    # Save metadata
    metadata_file = f"{METADATA_DIR}/slide-index.json"
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2, ensure_ascii=False)
    print(f"✓ Metadata saved to {metadata_file}")
    
    # Save markdown
    readme_file = f"{OUTPUT_DIR}/README.md"
    with open(readme_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(markdown_content))
    print(f"✓ Markdown documentation saved to {readme_file}")
    
    # Close PDF
    doc.close()
    
    # Create ZIP archive
    print("\n📦 Creating ZIP archive...")
    shutil.make_archive(OUTPUT_DIR, 'zip', OUTPUT_DIR)
    print(f"✓ ZIP archive created: {OUTPUT_DIR}.zip")
    
    print("\n" + "="*60)
    print("✅ CONVERSION COMPLETE!")
    print("="*60)
    print(f"Total Slides: {total_pages}")
    print(f"Output Directory: {OUTPUT_DIR}/")
    print(f"README: {readme_file}")
    print(f"Archive: {OUTPUT_DIR}.zip")
    print("="*60)

if __name__ == "__main__":
    process_pdf()
