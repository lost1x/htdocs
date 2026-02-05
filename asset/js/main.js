// ===== SPAAROW HUB MAIN JAVASCRIPT =====

class SpaarowHub {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAnimations();
        this.setupAnalytics();
    }

    setupEventListeners() {
        // Add hover effects to cards
        const cards = document.querySelectorAll('.tool-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.onCardHover(card, true));
            card.addEventListener('mouseleave', () => this.onCardHover(card, false));
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
    }

    setupAnimations() {
        // Animate cards on scroll
        this.observeCards();
        
        // Add parallax effect to floating orbs
        this.setupParallax();
    }

    setupAnalytics() {
        // Track page views
        this.trackPageView();
        
        // Track card interactions
        const cards = document.querySelectorAll('.tool-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const tool = card.dataset.tool;
                this.trackEvent('tool_click', { tool });
            });
        });
    }

    onCardHover(card, isHovering) {
        if (isHovering) {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            this.addGlowEffect(card);
        } else {
            card.style.transform = 'translateY(0) scale(1)';
            this.removeGlowEffect(card);
        }
    }

    addGlowEffect(card) {
        const theme = card.dataset.theme;
        if (!theme) return;

        const colors = {
            love: 'rgba(236, 72, 153, 0.4)',
            tarot: 'rgba(107, 70, 193, 0.4)',
            dream: 'rgba(59, 130, 246, 0.4)',
            fortune: 'rgba(249, 115, 22, 0.4)',
            zodiac: 'rgba(20, 184, 166, 0.4)',
            numerology: 'rgba(147, 51, 234, 0.4)'
        };

        card.style.boxShadow = `0 20px 25px rgba(0, 0, 0, 0.1), 0 0 30px ${colors[theme]}`;
    }

    removeGlowEffect(card) {
        card.style.boxShadow = '';
    }

    observeCards() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        const cards = document.querySelectorAll('.tool-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }

    setupParallax() {
        document.addEventListener('mousemove', (e) => {
            const orbs = document.querySelectorAll('.floating-orb');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 10;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                
                orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
    }

    handleKeyboardNavigation(e) {
        const cards = Array.from(document.querySelectorAll('.tool-card:not(.coming-soon)'));
        const focusedCard = document.activeElement.closest('.tool-card');
        
        if (!focusedCard) return;

        const currentIndex = cards.indexOf(focusedCard);
        let nextIndex = currentIndex;

        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                nextIndex = (currentIndex + 1) % cards.length;
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                nextIndex = (currentIndex - 1 + cards.length) % cards.length;
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                this.navigateToTool(focusedCard.dataset.tool);
                return;
        }

        if (nextIndex !== currentIndex) {
            e.preventDefault();
            cards[nextIndex].focus();
        }
    }

    navigateToTool(tool) {
        if (!tool || tool === 'coming-soon') return;

        // Add loading state
        const card = document.querySelector(`[data-tool="${tool}"]`);
        if (card) {
            card.classList.add('loading');
        }

        // Track navigation
        this.trackEvent('navigation', { tool });

        // Navigate to tool
        setTimeout(() => {
            window.location.href = `/${tool}/`;
        }, 300);
    }

    trackPageView() {
        // Simple analytics tracking
        console.log('Page view: Spaarow Hub');
        
        // In a real implementation, you'd send this to your analytics service
        // gtag('config', 'GA_MEASUREMENT_ID', { page_path: '/' });
    }

    trackEvent(eventName, parameters = {}) {
        // Simple event tracking
        console.log('Event:', eventName, parameters);
        
        // In a real implementation, you'd send this to your analytics service
        // gtag('event', eventName, parameters);
    }
}

// ===== UTILITY FUNCTIONS =====

function navigateToTool(tool) {
    window.hub.navigateToTool(tool);
}

function showPrivacy() {
    showModal('Privacy Policy', 'Your privacy is important to us. We collect minimal data necessary to provide our services...');
}

function showTerms() {
    showModal('Terms of Service', 'By using our services, you agree to our terms and conditions...');
}

function showSupport() {
    showModal('Support', 'Need help? Contact us at support@spaarowhub.great-site.net');
}

function showModal(title, content) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="closeModal()">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <div class="modal-header">
                        <h3 id="modal-title"></h3>
                        <button class="modal-close" onclick="closeModal()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body" id="modal-body"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Set content
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = `<p>${content}</p>`;

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// ===== CSS FOR MODAL (injected dynamically) =====

const modalStyles = `
<style>
#modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
}

.modal-content {
    position: relative;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 0;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    backdrop-filter: blur(10px);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--border-color);
}

.modal-header h3 {
    margin: 0;
    color: var(--text-primary);
}

.modal-close {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all var(--transition-fast);
}

.modal-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
}

.modal-body {
    padding: var(--spacing-lg);
    color: var(--text-secondary);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .modal-content {
        margin: var(--spacing-md);
        width: calc(100% - 2rem);
    }
    
    .modal-header,
    .modal-body {
        padding: var(--spacing-md);
    }
}
</style>
`;

// Inject modal styles
if (!document.getElementById('modal-styles')) {
    const styleElement = document.createElement('div');
    styleElement.id = 'modal-styles';
    styleElement.innerHTML = modalStyles;
    document.head.appendChild(styleElement);
}

// ===== INITIALIZATION =====

// Initialize the hub when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.hub = new SpaarowHub();
    
    // Add smooth reveal animation to header
    const header = document.querySelector('.header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-30px)';
        header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        window.hub.trackPageView();
    }
});

// Export for global access
window.SpaarowHub = SpaarowHub;
window.navigateToTool = navigateToTool;
window.showPrivacy = showPrivacy;
window.showTerms = showTerms;
window.showSupport = showSupport;
window.closeModal = closeModal;

// ===== SUGGESTION SYSTEM =====

class SuggestionSystem {
    constructor() {
        this.suggestions = [];
        this.loadSuggestions();
        this.updateVoteCount();
    }

    loadSuggestions() {
        const stored = localStorage.getItem('toolSuggestions');
        if (stored) {
            this.suggestions = JSON.parse(stored);
        }
    }

    saveSuggestions() {
        localStorage.setItem('toolSuggestions', JSON.stringify(this.suggestions));
    }

    addSuggestion(suggestion) {
        if (!this.suggestions.includes(suggestion)) {
            this.suggestions.push(suggestion);
            this.saveSuggestions();
            this.updateVoteCount();
            this.showFeedback('Thank you for your suggestion!', 'success');
        } else {
            this.showFeedback('You already suggested this!', 'info');
        }
    }

    updateVoteCount() {
        const count = this.suggestions.length;
        document.getElementById('vote-count').textContent = count;
    }

    showFeedback(message, type = 'info') {
        const feedback = document.createElement('div');
        feedback.className = `suggestion-feedback ${type}`;
        feedback.textContent = message;
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(59, 130, 246, 0.9)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 1001;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }
}

// Initialize suggestion system
window.suggestionSystem = new SuggestionSystem();

// Global functions for suggestion system
window.addSuggestion = (suggestion) => window.suggestionSystem.addSuggestion(suggestion);
window.submitSuggestion = () => {
    const input = document.getElementById('tool-suggestion');
    const suggestion = input.value.trim();
    
    if (suggestion) {
        window.suggestionSystem.addSuggestion(suggestion);
        input.value = '';
        input.focus();
    }
};
