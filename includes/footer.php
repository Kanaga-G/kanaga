<footer class="bg-dark text-white py-5">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-6">
                <div class="d-flex align-items-center mb-4">
                    <div class="brand-icon bg-primary text-white rounded me-2 d-flex align-items-center justify-content-center">
                        <span class="fw-bold">K</span>
                    </div>
                    <span class="h4 fw-bold mb-0">Kanaga Services</span>
                </div>
                <p class="text-light mb-4">
                    Votre partenaire de confiance pour tous vos besoins en pressing et couture. 
                    Service de qualité, livraison rapide et satisfaction garantie.
                </p>
                <div class="d-flex align-items-center">
                    <i class="fas fa-phone text-primary me-2"></i>
                    <span>+221 77 123 45 67</span>
                </div>
            </div>

            <div class="col-lg-3">
                <h5 class="fw-bold mb-4">Liens rapides</h5>
                <ul class="list-unstyled">
                    <li class="mb-2">
                        <a href="index.php" class="text-light text-decoration-none hover-primary">
                            <i class="fas fa-home me-2"></i>Accueil
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="services.php" class="text-light text-decoration-none hover-primary">
                            <i class="fas fa-concierge-bell me-2"></i>Nos Services
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="reservation.php" class="text-light text-decoration-none hover-primary">
                            <i class="fas fa-calendar-plus me-2"></i>Réservation
                        </a>
                    </li>
                    <li class="mb-2">
                        <a href="contact.php" class="text-light text-decoration-none hover-primary">
                            <i class="fas fa-envelope me-2"></i>Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-lg-3">
                <h5 class="fw-bold mb-4">Contact</h5>
                <div class="mb-3">
                    <i class="fas fa-map-marker-alt text-primary me-2"></i>
                    <span class="small">Dakar, Sénégal</span>
                </div>
                <div class="mb-3">
                    <i class="fas fa-envelope text-primary me-2"></i>
                    <span class="small">contact@kanaga-services.sn</span>
                </div>
                <div class="mb-3">
                    <i class="fas fa-clock text-primary me-2"></i>
                    <div class="small">
                        <div>Lun - Ven: 8h - 18h</div>
                        <div>Sam: 9h - 16h</div>
                    </div>
                </div>
                
                <!-- Social Media -->
                <div class="mt-4">
                    <h6 class="fw-bold mb-3">Suivez-nous</h6>
                    <div class="d-flex gap-2">
                        <a href="#" class="btn btn-outline-light btn-sm">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="btn btn-outline-light btn-sm">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="btn btn-outline-light btn-sm">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="btn btn-outline-light btn-sm">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <hr class="my-4">
        <div class="row align-items-center">
            <div class="col-md-6">
                <p class="text-muted mb-0">
                    © 2024 Kanaga Services. Tous droits réservés.
                </p>
            </div>
            <div class="col-md-6 text-md-end">
                <div class="d-flex justify-content-md-end gap-3">
                    <a href="#" class="text-muted text-decoration-none small">Politique de confidentialité</a>
                    <a href="#" class="text-muted text-decoration-none small">Conditions d'utilisation</a>
                    <a href="#" class="text-muted text-decoration-none small">FAQ</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Chatbot -->
<div id="chatbot" class="chatbot">
    <div class="chatbot-toggle" id="chatbotToggle">
        <i class="fas fa-comments"></i>
    </div>
    
    <div class="chatbot-window d-none" id="chatbotWindow">
        <div class="chatbot-header">
            <div class="d-flex align-items-center">
                <i class="fas fa-robot me-2"></i>
                <div>
                    <h6 class="mb-0 fw-bold">Assistant Kanaga</h6>
                    <small class="text-muted">En ligne</small>
                </div>
            </div>
            <button class="btn btn-sm" id="chatbotClose">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="chatbot-messages" id="chatbotMessages">
            <div class="message bot-message">
                <div class="message-content">
                    Bonjour ! Je suis l'assistant virtuel de Kanaga Services. Comment puis-je vous aider aujourd'hui ?
                </div>
                <div class="message-time">
                    <?php echo date('H:i'); ?>
                </div>
            </div>
        </div>
        
        <div class="chatbot-input">
            <div class="input-group">
                <input type="text" class="form-control" id="chatbotInput" placeholder="Tapez votre message...">
                <button class="btn btn-primary" id="chatbotSend">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
.hover-primary:hover {
    color: var(--primary-color) !important;
}
</style>