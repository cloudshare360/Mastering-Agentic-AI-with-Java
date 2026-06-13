# 🌐 Interactive Slide Viewer

## Overview

This is an interactive web-based viewer for the **Mastering Agentic AI with Java** course documentation. It provides a beautiful, user-friendly interface to browse through all 25 slides with left sidebar navigation and a content viewing pane.

## Features

✨ **Left Sidebar Navigation**
- Complete list of all 25 slides
- Slide numbers and types displayed
- Active slide highlighting
- Search functionality to filter slides

📊 **Right Content Pane**
- High-resolution slide images
- Slide information and metadata
- Interactive Mermaid diagrams
- Clean, readable layout

🎯 **Interactive Controls**
- Click any slide in the sidebar to view
- Previous/Next buttons for sequential navigation
- Keyboard shortcuts (Arrow keys, Home, End)
- Smooth scrolling and transitions

🔍 **Search**
- Real-time search as you type
- Searches slide titles, types, and numbers
- Instant filtering of navigation items

## How to Use

### Option 1: Open Locally

1. **Open in Browser:**
   ```bash
   # Navigate to the directory
   cd Mastering-Agentic-AI-with-Java
   
   # Open index.html in your browser
   open index.html  # macOS
   xdg-open index.html  # Linux
   start index.html  # Windows
   ```

2. **Or use a local server (recommended):**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Or Python 2
   python -m SimpleHTTPServer 8000
   
   # Or using Node.js
   npx http-server
   ```
   
   Then open: `http://localhost:8000`

### Option 2: Deploy to GitHub Pages

1. Push the repository to GitHub
2. Go to Settings > Pages
3. Select the branch and `/Mastering-Agentic-AI-with-Java` folder
4. Your site will be live at: `https://yourusername.github.io/repo-name/`

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous slide |
| `→` | Next slide |
| `Home` | Go to first slide |
| `End` | Go to last slide |

## File Structure

```
Mastering-Agentic-AI-with-Java/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── app.js              # JavaScript functionality
├── slides/             # Slide images
│   ├── slide-001.png
│   └── ...
├── diagrams/           # Mermaid diagram files
│   ├── slide-002.mmd
│   └── ...
└── metadata/
    └── slide-index.json  # Slide metadata
```

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with modern layout (Flexbox, Grid)
- **Vanilla JavaScript** - Interactivity
- **Mermaid.js** - Diagram rendering
- **Marked.js** - Markdown parsing (if needed)

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Modern mobile browsers

## Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    --sidebar-bg: #0f172a;
    /* ... */
}
```

### Modify Layout

All layout styles are in `styles.css` with clear section comments.

### Add Features

The `app.js` file is well-documented and modular for easy extension.

## Troubleshooting

**Issue:** Slides not loading
- **Solution:** Make sure you're serving via HTTP (not file://) due to CORS restrictions

**Issue:** Diagrams not rendering
- **Solution:** Check browser console for errors. Ensure Mermaid CDN is accessible.

**Issue:** Images not displaying
- **Solution:** Verify all image files are in the `slides/` directory

## Performance

- Fast loading with optimized images
- Lazy loading for better performance
- Smooth animations and transitions
- Responsive design for all screen sizes

## Credits

**Course:** Mastering Agentic AI with Java  
**Instructors:** Hyder Abbas & Navin Reddy  
**Converted by:** PDF to Markdown Converter  
**Viewer:** Interactive Web Application

---

Enjoy exploring the course content! 🚀
