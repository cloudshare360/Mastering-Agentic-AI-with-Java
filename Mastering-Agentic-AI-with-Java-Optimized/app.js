// Initialize Mermaid
mermaid.initialize({ 
    startOnLoad: true,
    theme: 'default',
    themeVariables: {
        primaryColor: '#dbeafe',
        primaryTextColor: '#1e40af',
        primaryBorderColor: '#3b82f6',
        lineColor: '#64748b',
        secondaryColor: '#f1f5f9',
        tertiaryColor: '#f8fafc'
    }
});

// Slide data
let slidesData = [];
let currentSlideIndex = 0;

// Load metadata
async function loadMetadata() {
    try {
        const response = await fetch('metadata/slide-index.json');
        slidesData = await response.json();
        renderNavigation();
        renderWelcome();
    } catch (error) {
        console.error('Error loading metadata:', error);
        document.getElementById('slideNavigation').innerHTML = 
            '<div style="padding: 20px; color: #ef4444;">Error loading slides. Please check the console.</div>';
    }
}

// Render navigation sidebar
function renderNavigation() {
    const nav = document.getElementById('slideNavigation');
    nav.innerHTML = '';
    
    slidesData.forEach((slide, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.innerHTML = `
            <div class="nav-item-number">${slide.slide}</div>
            <div class="nav-item-content">
                <div class="nav-item-title">${truncateTitle(slide.title)}</div>
                <div class="nav-item-type">${slide.type}</div>
            </div>
        `;
        
        navItem.addEventListener('click', () => {
            currentSlideIndex = index;
            renderSlide(slide);
            updateActiveNav();
            updateNavigationButtons();
        });
        
        nav.appendChild(navItem);
    });
}

// Truncate long titles
function truncateTitle(title) {
    if (title.length > 50) {
        return title.substring(0, 47) + '...';
    }
    return title;
}

// Render slide content
async function renderSlide(slide) {
    const contentBody = document.getElementById('contentBody');
    const slideTitle = document.getElementById('slideTitle');
    const slideMeta = document.getElementById('slideMeta');
    
    // Update header
    slideTitle.textContent = `Slide ${slide.slide}: ${slide.title}`;
    slideMeta.className = `badge type-${slide.type.toLowerCase().replace(/\s+/g, '-')}`;
    slideMeta.textContent = slide.type;
    
    // Build content
    let content = `
        <div class="fade-in">
            <img src="${slide.image}" alt="Slide ${slide.slide}" class="slide-image" />
            
            <div class="slide-content">
                <h2>📄 Slide Information</h2>
                <p><strong>Slide Number:</strong> ${slide.slide} of ${slidesData.length}</p>
                <p><strong>Type:</strong> ${slide.type}</p>
                <p><strong>Title:</strong> ${slide.title}</p>
            </div>
    `;
    
    // Add diagram if exists
    if (slide.diagram) {
        try {
            const diagramResponse = await fetch(slide.diagram);
            let diagramContent = await diagramResponse.text();
            
            // Remove markdown code fences if present
            diagramContent = diagramContent.replace(/```mermaid\n?/g, '').replace(/```\n?$/g, '').trim();
            
            content += `
                <div class="diagram-section">
                    <h3>📐 Architecture Diagram</h3>
                    <div class="mermaid">
                        ${diagramContent}
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('Error loading diagram:', error);
        }
    }
    
    content += `</div>`;
    
    contentBody.innerHTML = content;
    
    // Reinitialize Mermaid for new diagrams
    if (slide.diagram) {
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    }
    
    // Scroll to top
    contentBody.scrollTop = 0;
}

// Render welcome screen
function renderWelcome() {
    const contentBody = document.getElementById('contentBody');
    contentBody.innerHTML = `
        <div class="welcome-screen">
            <div class="welcome-card fade-in">
                <h2>🎓 Welcome to the Course Documentation</h2>
                <p>This interactive documentation contains all ${slidesData.length} slides from the <strong>Mastering Agentic AI with Java</strong> course brochure.</p>
                
                <div class="features">
                    <div class="feature">
                        <span class="icon">📊</span>
                        <h3>${slidesData.length} Slides</h3>
                        <p>Complete course overview</p>
                    </div>
                    <div class="feature">
                        <span class="icon">📐</span>
                        <h3>${slidesData.filter(s => s.diagram).length} Diagrams</h3>
                        <p>Architecture & workflows</p>
                    </div>
                    <div class="feature">
                        <span class="icon">🔍</span>
                        <h3>Searchable</h3>
                        <p>Find content instantly</p>
                    </div>
                </div>
                
                <div class="course-blocks">
                    <h3>📚 Course Structure</h3>
                    <ul>
                        <li><strong>Block 1:</strong> Foundations - NLP, Transformers, LLMs</li>
                        <li><strong>Block 2:</strong> Spring AI - RAG, Memory, Tool Calling</li>
                        <li><strong>Block 3:</strong> Google ADK - Agent Development</li>
                        <li><strong>Block 4:</strong> LangChain4j - Agentic Workflows</li>
                        <li><strong>Block 5:</strong> Projects - Real-world applications</li>
                    </ul>
                </div>
                
                <p class="cta">👈 Click on any slide from the left panel to view its content</p>
            </div>
        </div>
    `;
}

// Update active navigation item
function updateActiveNav() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        if (index === currentSlideIndex) {
            item.classList.add('active');
            // Scroll into view
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            item.classList.remove('active');
        }
    });
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slidesData.length - 1;
}

// Previous slide
function previousSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide(slidesData[currentSlideIndex]);
        updateActiveNav();
        updateNavigationButtons();
    }
}

// Next slide
function nextSlide() {
    if (currentSlideIndex < slidesData.length - 1) {
        currentSlideIndex++;
        renderSlide(slidesData[currentSlideIndex]);
        updateActiveNav();
        updateNavigationButtons();
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach((item, index) => {
            const slide = slidesData[index];
            const title = slide.title.toLowerCase();
            const type = slide.type.toLowerCase();
            
            if (title.includes(searchTerm) || type.includes(searchTerm) || 
                slide.slide.toString().includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            previousSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'Home') {
            currentSlideIndex = 0;
            renderSlide(slidesData[currentSlideIndex]);
            updateActiveNav();
            updateNavigationButtons();
        } else if (e.key === 'End') {
            currentSlideIndex = slidesData.length - 1;
            renderSlide(slidesData[currentSlideIndex]);
            updateActiveNav();
            updateNavigationButtons();
        }
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadMetadata();
    setupSearch();
    setupKeyboardNavigation();
    
    // Button event listeners
    document.getElementById('prevBtn').addEventListener('click', previousSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    
    // Initialize navigation buttons
    updateNavigationButtons();
});
