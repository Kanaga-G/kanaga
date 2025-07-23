// Main JavaScript for Kanaga Services

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initAuth();
    initChatbot();
    initAnimations();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    // Add scrolled class on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
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

// Authentication functionality
function initAuth() {
    const authModal = document.getElementById('authModal');
    const authForm = document.getElementById('loginForm');
    const authToggleBtn = document.getElementById('authToggleBtn');
    const authToggleText = document.getElementById('authToggleText');
    const authModalTitle = document.getElementById('authModalTitle');
    const authSubmitBtn = document.getElementById('authSubmitBtn');
    const nameField = document.getElementById('nameField');
    const authError = document.getElementById('authError');
    
    let isLoginMode = true;
    
    // Toggle between login and register
    authToggleBtn.addEventListener('click', function() {
        isLoginMode = !isLoginMode;
        
        if (isLoginMode) {
            authModalTitle.textContent = 'Connexion';
            authSubmitBtn.textContent = 'Se connecter';
            authToggleText.textContent = 'Pas encore de compte ?';
            authToggleBtn.textContent = 'S\'inscrire';
            nameField.classList.add('d-none');
        } else {
            authModalTitle.textContent = 'Inscription';
            authSubmitBtn.textContent = 'S\'inscrire';
            authToggleText.textContent = 'Déjà un compte ?';
            authToggleBtn.textContent = 'Se connecter';
            nameField.classList.remove('d-none');
        }
        
        // Clear form and errors
        authForm.reset();
        authError.classList.add('d-none');
    });
    
    // Handle form submission
    authForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(authForm);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('name');
        
        // Show loading state
        const originalText = authSubmitBtn.textContent;
        authSubmitBtn.innerHTML = '<span class="loading"></span> Chargement...';
        authSubmitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            try {
                // Mock authentication logic
                if (isLoginMode) {
                    // Login logic
                    if (email && password) {
                        const userData = {
                            name: email.split('@')[0],
                            email: email,
                            role: email.includes('admin') ? 'admin' : 
                                  email.includes('livreur') ? 'livreur' : 'client'
                        };
                        
                        // Store user data (in real app, this would be handled by PHP session)
                        localStorage.setItem('kanaga_user', JSON.stringify(userData));
                        
                        // Redirect or reload page
                        window.location.reload();
                    } else {
                        throw new Error('Email et mot de passe requis');
                    }
                } else {
                    // Register logic
                    if (email && password && name) {
                        const userData = {
                            name: name,
                            email: email,
                            role: 'client'
                        };
                        
                        localStorage.setItem('kanaga_user', JSON.stringify(userData));
                        window.location.reload();
                    } else {
                        throw new Error('Tous les champs sont requis');
                    }
                }
            } catch (error) {
                authError.textContent = error.message;
                authError.classList.remove('d-none');
            } finally {
                authSubmitBtn.textContent = originalText;
                authSubmitBtn.disabled = false;
            }
        }, 1500);
    });
}

// Chatbot functionality
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    let isOpen = false;
    
    // Predefined responses
    const responses = {
        'tarif': 'Nos tarifs varient selon le service : Pressing à partir de 1500 FCFA, Couture à partir de 5000 FCFA. Contactez-nous pour un devis personnalisé !',
        'horaire': 'Nous sommes ouverts du lundi au vendredi de 8h à 18h, et le samedi de 9h à 16h.',
        'livraison': 'Nous proposons un service de livraison gratuite dès 10000 FCFA d\'achat. La livraison se fait en 24-48h.',
        'service': 'Nous proposons du pressing professionnel, de la couture sur mesure et un service de livraison à domicile.',
        'contact': 'Vous pouvez nous contacter au +221 77 123 45 67 ou par email à contact@kanaga-services.sn'
    };
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', function() {
        isOpen = !isOpen;
        if (isOpen) {
            chatbotWindow.classList.remove('d-none');
            chatbotInput.focus();
        } else {
            chatbotWindow.classList.add('d-none');
        }
    });
    
    // Close chatbot
    chatbotClose.addEventListener('click', function() {
        isOpen = false;
        chatbotWindow.classList.add('d-none');
    });
    
    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Generate bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const now = new Date();
        const time = now.toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        messageDiv.innerHTML = `
            <div class="message-content">${text}</div>
            <div class="message-time">${time}</div>
        `;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Get bot response
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Check for keywords
        for (const [key, response] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        
        // Greeting responses
        if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
            return 'Bonjour ! Comment puis-je vous aider avec nos services de pressing et couture ?';
        }
        
        // Default response
        return 'Je ne suis pas sûr de comprendre votre question. Pourriez-vous me demander des informations sur nos tarifs, horaires, services ou livraison ?';
    }
    
    // Event listeners
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Animation functionality
function initAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .testimonial-card, .feature-icon').forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Utility functions
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Form validation helper
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Loading state helper
function setLoadingState(button, loading = true) {
    if (loading) {
        button.dataset.originalText = button.textContent;
        button.innerHTML = '<span class="loading"></span> Chargement...';
        button.disabled = true;
    } else {
        button.textContent = button.dataset.originalText;
        button.disabled = false;
    }
}

// Local storage helpers
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

function getFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
}

// API helper functions (for future PHP integration)
async function apiRequest(url, options = {}) {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// Export functions for use in other files
window.KanagaApp = {
    showAlert,
    validateForm,
    setLoadingState,
    saveToStorage,
    getFromStorage,
    apiRequest
};