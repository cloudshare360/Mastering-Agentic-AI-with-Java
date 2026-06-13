// Custom JavaScript for Mastering Agentic AI with Java

document.addEventListener('DOMContentLoaded', function() {
  
  // Add copy button functionality enhancement
  enhanceCopyButtons();
  
  // Add smooth scroll for anchor links
  addSmoothScrolling();
  
  // Add image zoom functionality
  addImageZoom();
  
  // Track page views (optional - for analytics)
  trackPageView();
  
  // Add keyboard shortcuts
  addKeyboardShortcuts();
});

// Enhance copy buttons with feedback
function enhanceCopyButtons() {
  const copyButtons = document.querySelectorAll('button[data-clipboard-text]');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const originalText = this.textContent;
      this.textContent = '✓ Copied!';
      this.style.backgroundColor = '#34a853';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.backgroundColor = '';
      }, 2000);
    });
  });
}

// Smooth scrolling for anchor links
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add click-to-zoom for images
function addImageZoom() {
  const images = document.querySelectorAll('article img');
  
  images.forEach(img => {
    // Skip small images
    if (img.naturalWidth < 400) return;
    
    img.style.cursor = 'zoom-in';
    
    img.addEventListener('click', function() {
      const modal = createImageModal(this.src, this.alt);
      document.body.appendChild(modal);
    });
  });
}

// Create image zoom modal
function createImageModal(src, alt) {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    cursor: zoom-out;
  `;
  
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    border-radius: 8px;
  `;
  
  modal.appendChild(img);
  
  modal.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
  
  return modal;
}

// Track page views (placeholder for analytics)
function trackPageView() {
  const page = window.location.pathname;
  console.log('Page view:', page);
  
  // Add your analytics code here
  // Example: gtag('event', 'page_view', { page_path: page });
}

// Keyboard shortcuts
function addKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.querySelector('input[type="search"]');
      if (searchInput) searchInput.focus();
    }
    
    // Ctrl/Cmd + /: Show keyboard shortcuts
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      e.preventDefault();
      showKeyboardShortcuts();
    }
  });
}

// Show keyboard shortcuts modal
function showKeyboardShortcuts() {
  const shortcuts = [
    { key: 'Ctrl/Cmd + K', action: 'Focus search' },
    { key: 'Ctrl/Cmd + /', action: 'Show shortcuts' },
    { key: 'Arrow Keys', action: 'Navigate pages' }
  ];
  
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2em;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    z-index: 10000;
    min-width: 300px;
  `;
  
  const title = document.createElement('h3');
  title.textContent = 'Keyboard Shortcuts';
  title.style.marginTop = '0';
  modal.appendChild(title);
  
  const list = document.createElement('ul');
  list.style.listStyle = 'none';
  list.style.padding = '0';
  
  shortcuts.forEach(shortcut => {
    const item = document.createElement('li');
    item.style.cssText = 'margin: 1em 0; display: flex; justify-content: space-between;';
    item.innerHTML = `
      <span style="font-weight: 600;">${shortcut.key}</span>
      <span>${shortcut.action}</span>
    `;
    list.appendChild(item);
  });
  
  modal.appendChild(list);
  
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
  `;
  
  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay);
    document.body.removeChild(modal);
  });
  
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
}

// Progress tracker for reading
window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / documentHeight) * 100;
  
  // Update progress bar if it exists
  const progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    progressBar.style.width = progress + '%';
  }
});
