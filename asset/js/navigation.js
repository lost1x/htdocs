// ===== SHARED NAVIGATION COMPONENT =====

class HubNavigation {
    constructor() {
        this.currentTool = this.getCurrentTool();
        this.init();
    }

    init() {
        this.createNavigation();
        this.setupEventListeners();
    }

    getCurrentTool() {
        const path = window.location.pathname;
        if (path === '/' || path.endsWith('/index.html')) return 'hub';
        return path.split('/').filter(Boolean)[0] || 'hub';
    }

    createNavigation() {
        // Don't add navigation to hub page
        if (this.currentTool === 'hub') return;

        const navHTML = `
            <nav class="hub-nav">
                <div class="nav-container">
                    <button class="nav-home-btn" onclick="navigateToHub()" title="Back to Hub">
                        <i class="fas fa-home"></i>
                        <span>Hub</span>
                    </button>
                    
                    <div class="nav-title">
                        <h2>${this.getToolTitle()}</h2>
                    </div>
                    
                    <div class="nav-actions">
                        <button class="nav-menu-btn" onclick="toggleNavMenu()" title="Menu">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div class="nav-menu" id="navMenu">
                    <div class="nav-menu-content">
                        <h3>Other Tools</h3>
                        <div class="nav-tools-grid">
                            ${this.getToolLinks()}
                        </div>
                    </div>
                </div>
            </nav>
        `;

        // Insert navigation at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }

    getToolTitle() {
        const titles = {
            'lovequiz': 'Love Quiz',
            'mytarot': 'Tarot Reading',
            'dream-interpreter': 'Dream Interpreter',
            'fortune-teller': 'Fortune Teller',
            'zodiac-calculator': 'Zodiac Calculator',
            'numerology': 'Numerology'
        };
        return titles[this.currentTool] || 'Mystical Tool';
    }

    getToolLinks() {
        const tools = [
            { id: 'lovequiz', name: 'Love Quiz', icon: 'fa-heart', color: '#EC4899' },
            { id: 'mytarot', name: 'Tarot Reading', icon: 'fa-moon', color: '#6B46C1' },
            { id: 'dream-interpreter', name: 'Dream Interpreter', icon: 'fa-cloud', color: '#3B82F6' },
            { id: 'fortune-teller', name: 'Fortune Teller', icon: 'fa-circle', color: '#F97316' },
            { id: 'zodiac-calculator', name: 'Zodiac Calculator', icon: 'fa-star', color: '#14B8A6' },
            { id: 'numerology', name: 'Numerology', icon: 'fa-infinity', color: '#9333EA' }
        ];

        return tools
            .filter(tool => tool.id !== this.currentTool)
            .map(tool => `
                <a href="/${tool.id}/" class="nav-tool-link" style="--tool-color: ${tool.color}">
                    <i class="fas ${tool.icon}"></i>
                    <span>${tool.name}</span>
                </a>
            `).join('');
    }

    setupEventListeners() {
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const menu = document.getElementById('navMenu');
            const menuBtn = document.querySelector('.nav-menu-btn');
            
            if (menu && menuBtn && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
                menu.classList.remove('active');
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const menu = document.getElementById('navMenu');
                if (menu) menu.classList.remove('active');
            }
        });
    }
}

// ===== UTILITY FUNCTIONS =====

function navigateToHub() {
    window.location.href = '/';
}

function toggleNavMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// ===== CSS FOR NAVIGATION (injected dynamically) =====

const navStyles = `
<style>
.hub-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(15, 15, 35, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: all var(--transition-normal);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) var(--spacing-md);
    max-width: 1200px;
    margin: 0 auto;
}

.nav-home-btn {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 0.5rem 1rem;
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    transition: all var(--transition-fast);
    cursor: pointer;
}

.nav-home-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
}

.nav-title h2 {
    margin: 0;
    font-family: var(--font-mystical);
    font-size: 1.5rem;
    background: linear-gradient(135deg, var(--fortune-primary), var(--fortune-accent), #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.nav-menu-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 0.5rem;
    color: var(--text-primary);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.nav-menu-btn:hover {
    background: rgba(255, 255, 255, 0.15);
}

.nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(15, 15, 35, 0.98);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid var(--border-color);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
}

.nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

.nav-menu-content {
    padding: var(--spacing-lg);
    max-width: 1200px;
    margin: 0 auto;
}

.nav-menu-content h3 {
    margin: 0 0 var(--spacing-md) 0;
    font-family: var(--font-mystical);
    color: var(--text-primary);
    text-align: center;
}

.nav-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-sm);
}

.nav-tool-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1rem;
    color: var(--text-primary);
    text-decoration: none;
    transition: all var(--transition-fast);
    text-align: center;
    justify-content: center;
}

.nav-tool-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--tool-color);
    transform: translateY(-2px);
}

.nav-tool-link i {
    font-size: 1.2rem;
    color: var(--tool-color);
}

/* Add body padding to account for fixed nav */
body {
    padding-top: 80px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        padding: var(--spacing-sm);
    }
    
    .nav-title h2 {
        font-size: 1.2rem;
    }
    
    .nav-home-btn span {
        display: none;
    }
    
    .nav-tools-grid {
        grid-template-columns: 1fr;
    }
    
    body {
        padding-top: 70px;
    }
}

@media (max-width: 480px) {
    .nav-menu-content {
        padding: var(--spacing-md);
    }
    
    .nav-tools-grid {
        gap: var(--spacing-xs);
    }
    
    .nav-tool-link {
        padding: 0.8rem;
    }
}
</style>
`;

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Inject navigation styles
    if (!document.getElementById('nav-styles')) {
        const styleElement = document.createElement('div');
        styleElement.id = 'nav-styles';
        styleElement.innerHTML = navStyles;
        document.head.appendChild(styleElement);
    }
    
    // Initialize navigation
    window.hubNav = new HubNavigation();
});

// Export for global access
window.HubNavigation = HubNavigation;
window.navigateToHub = navigateToHub;
window.toggleNavMenu = toggleNavMenu;
