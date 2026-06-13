#!/bin/bash

# Script to reorganize the workspace and eliminate duplicates

echo "🧹 Starting workspace reorganization..."

# Create new clean structure
mkdir -p docs
mkdir -p docs/assets/images
mkdir -p docs/assets/diagrams

# Move the existing docs content (already well organized)
echo "📁 Moving existing documentation..."
if [ -d "Mastering-Agentic-AI-with-Java/docs/01-Foundations" ]; then
    cp -r Mastering-Agentic-AI-with-Java/docs/01-Foundations docs/
fi

if [ -d "Mastering-Agentic-AI-with-Java/docs/02-SpringAI" ]; then
    cp -r Mastering-Agentic-AI-with-Java/docs/02-SpringAI docs/
fi

if [ -d "Mastering-Agentic-AI-with-Java/docs/03-GoogleADK" ]; then
    cp -r Mastering-Agentic-AI-with-Java/docs/03-GoogleADK docs/
fi

if [ -d "Mastering-Agentic-AI-with-Java/docs/04-LangChain4j" ]; then
    cp -r Mastering-Agentic-AI-with-Java/docs/04-LangChain4j docs/
fi

if [ -d "Mastering-Agentic-AI-with-Java/docs/05-Projects" ]; then
    cp -r Mastering-Agentic-AI-with-Java/docs/05-Projects docs/
fi

# Use images from the newer extraction (higher quality)
echo "🖼️  Copying slide images (using higher quality version)..."
if [ -d "Mastering-Agentic-AI-with-Java/slides" ]; then
    cp Mastering-Agentic-AI-with-Java/slides/*.png docs/assets/images/
else
    cp Mastering-Agentic-AI-with-Java/images/*.png docs/assets/images/
fi

# Copy diagrams
echo "📊 Copying Mermaid diagrams..."
if [ -d "Mastering-Agentic-AI-with-Java/diagrams" ]; then
    cp Mastering-Agentic-AI-with-Java/diagrams/*.mmd docs/assets/diagrams/
fi

# Copy useful documentation
echo "📄 Creating index page..."
if [ -f "Mastering-Agentic-AI-with-Java/docs/README.md" ]; then
    cp Mastering-Agentic-AI-with-Java/docs/README.md docs/index.md
fi

# Create slides reference page
echo "📑 Creating slides reference..."
if [ -f "Mastering-Agentic-AI-with-Java/docs/SLIDES_FORMATTED_TABLE.md" ]; then
    cp Mastering-Agentic-AI-with-Java/docs/SLIDES_FORMATTED_TABLE.md docs/slides-reference.md
fi

# Keep original PDF in root for reference
echo "📚 Preserving original PDF..."
if [ -f "Mastering-Agentic-AI-with-Java-Brochure.pdf" ]; then
    cp Mastering-Agentic-AI-with-Java-Brochure.pdf docs/assets/
fi

# Keep metadata
echo "📋 Preserving metadata..."
if [ -f "Mastering-Agentic-AI-with-Java/metadata/slide-index.json" ]; then
    mkdir -p docs/assets/metadata
    cp Mastering-Agentic-AI-with-Java/metadata/slide-index.json docs/assets/metadata/
fi

echo "✅ Reorganization complete!"
echo ""
echo "Clean structure created in ./docs/"
