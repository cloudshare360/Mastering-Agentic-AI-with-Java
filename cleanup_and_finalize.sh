#!/bin/bash

echo "🧹 Starting final cleanup and organization..."

# Backup the old directory
echo "📦 Creating backup..."
if [ -d "Mastering-Agentic-AI-with-Java" ]; then
    mv Mastering-Agentic-AI-with-Java _backup_old_structure
fi

# Remove old ZIP
if [ -f "Mastering-Agentic-AI-with-Java.zip" ]; then
    rm Mastering-Agentic-AI-with-Java.zip
fi

# Create archive directory for reference materials
echo "📁 Creating archive directory..."
mkdir -p archive
mv Mastering-Agentic-AI-with-Java-Brochure.pdf archive/
mv convert_pdf.py archive/
mv reorganize.sh archive/
mv CONVERSION_SUMMARY.md archive/

# docs directory is already clean and organized
echo "✅ Main docs directory is ready"

# Create a README for the project root
cat > README.md << 'ENDREADME'
# Mastering Agentic AI with Java

> Complete course documentation with MkDocs Material theme

[![MkDocs](https://img.shields.io/badge/docs-MkDocs-blue)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/theme-Material-blueviolet)](https://squidfunk.github.io/mkdocs-material/)

## 📚 About

This repository contains the complete documentation for **Mastering Agentic AI with Java** - a comprehensive course covering:

- **Block 1**: Foundations (NLP, Transformers, LLMs)
- **Block 2**: Spring AI Mastery
- **Block 3**: Google Agent Development Kit (ADK)
- **Block 4**: LangChain4j
- **Block 5**: Capstone Projects

## 🚀 Quick Start

### View Documentation Locally

```bash
# Install MkDocs and Material theme
pip install mkdocs mkdocs-material

# Serve documentation locally
mkdocs serve
```

Then open http://127.0.0.1:8000 in your browser.

### Build Static Site

```bash
mkdocs build
```

The static site will be generated in the `site/` directory.

## 📖 Documentation Structure

```
docs/
├── index.md                    # Home page
├── slides-reference.md         # Complete slides reference
├── 01-Foundations/             # Block 1: Foundations
│   ├── index.md
│   └── 01-NLP-Fundamentals.md
├── 02-SpringAI/                # Block 2: Spring AI
│   └── index.md
├── 03-GoogleADK/               # Block 3: Google ADK
│   └── index.md
├── 04-LangChain4j/             # Block 4: LangChain4j
│   └── index.md
├── 05-Projects/                # Block 5: Projects
│   └── index.md
└── assets/
    ├── images/                 # Slide images
    ├── diagrams/               # Mermaid diagrams
    └── metadata/               # JSON metadata
```

## 🎨 Features

- ✅ **Material Design** - Modern, responsive theme
- ✅ **Dark/Light Mode** - Toggle between themes
- ✅ **Search** - Full-text search across all content
- ✅ **Navigation** - Tree-based navigation with sections
- ✅ **Mermaid Diagrams** - Interactive diagrams
- ✅ **Code Highlighting** - Syntax highlighting for Java and more
- ✅ **Mobile Responsive** - Works great on all devices

## 🛠️ Development

### Prerequisites

- Python 3.8+
- pip

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the development server:
   ```bash
   mkdocs serve
   ```
4. Make changes to files in `docs/`
5. See live updates at http://127.0.0.1:8000

### Deployment

#### GitHub Pages

```bash
mkdocs gh-deploy
```

#### Custom Hosting

Build the static site and upload the `site/` directory to your hosting provider.

## 📝 Course Information

- **Start Date**: June 14, 2026
- **Duration**: 4 Months
- **Format**: Weekend (Sat & Sun, 9 AM - 12 PM IST)
- **Prerequisites**: Java & Spring Boot
- **Instructors**: Hyder Abbas & Navin Reddy

## 📚 Topics Covered

### Foundations
- NLP Fundamentals
- AI/ML/DL Hierarchy
- Transformers & Attention
- LLMs: Types, Tokens & Limitations
- Java + LLMs Integration

### Spring AI
- ChatClient & Prompts
- Memory & Advisors
- Vector Embeddings & Databases
- RAG (Retrieval Augmented Generation)
- Tool Calling & MCP
- Multimodal AI

### Google ADK
- Agent Architecture
- Tools & Function Calling
- Workflow Agents
- Multi-Agent Systems

### LangChain4j
- AI Services & Memory
- Agentic Workflows
- Supervisor & P2P Patterns
- Pure Agentic AI

### Projects
- AI Travel Planner Agent
- AI Customer Support Bot
- E-Commerce AI Backend (Capstone)

## 🔗 Links

- **Course Website**: [learn.telusko.com](https://learn.telusko.com)
- **Documentation**: [Your docs URL]
- **Repository**: [GitHub Repository]

## 📄 License

Copyright © 2026 Telusko Learning

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions about the course, visit [learn.telusko.com](https://learn.telusko.com)

---

**Built with ❤️ using [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)**
ENDREADME

# Create requirements.txt
cat > requirements.txt << 'ENDREQ'
mkdocs>=1.6.0
mkdocs-material>=9.7.0
pymdown-extensions>=10.0
ENDREQ

# Create .gitignore
cat > .gitignore << 'ENDGITIGNORE'
# MkDocs
site/
.cache/

# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
ENV/
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Backup
_backup*/
*.bak
ENDGITIGNORE

echo "📦 Creating new archive..."
cd ..
zip -r Mastering-Agentic-AI-with-Java.zip Mastering-Agentic-AI-with-Java/docs Mastering-Agentic-AI-with-Java/mkdocs.yml Mastering-Agentic-AI-with-Java/README.md Mastering-Agentic-AI-with-Java/requirements.txt -q
mv Mastering-Agentic-AI-with-Java.zip Mastering-Agentic-AI-with-Java/

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📊 Current structure:"
echo "-------------------"
tree -L 2 -I 'site|_backup*|.git' Mastering-Agentic-AI-with-Java/
echo ""
echo "🎉 Your documentation is ready!"
echo ""
echo "To view it:"
echo "  cd Mastering-Agentic-AI-with-Java"
echo "  mkdocs serve"
echo ""
echo "Then open: http://127.0.0.1:8000"
