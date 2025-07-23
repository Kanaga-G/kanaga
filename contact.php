<?php
session_start();

// Handle form submission
if ($_POST && isset($_POST['submit_contact'])) {
    // In a real application, you would validate and send email
    $success = true;
    $contact_data = [
        'name' => $_POST['name'] ?? '',
        'email' => $_POST['email'] ?? '',
        'phone' => $_POST['phone'] ?? '',
        'subject' => $_POST['subject'] ?? '',
        'message' => $_POST['message'] ?? ''
    ];
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Kanaga Services</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="assets/css/style.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <?php include 'includes/navbar.php'; ?>

    <!-- Hero Section -->
    <section class="hero-section py-5">
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="row align-items-center min-vh-50">
                <div class="col-lg-8 mx-auto text-center text-white">
                    <h1 class="display-4 fw-bold mb-4">Contactez-nous</h1>
                    <p class="lead">
                        Nous sommes là pour répondre à toutes vos questions
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm text-center h-100 hover-lift">
                        <div class="card-body p-4">
                            <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mx-auto mb-3">
                                <i class="fas fa-phone fa-2x"></i>
                            </div>
                            <h5 class="fw-bold mb-3">Téléphone</h5>
                            <p class="text-muted mb-2">+221 77 123 45 67</p>
                            <p class="text-muted mb-3">+221 33 123 45 67</p>
                            <small class="text-primary fw-medium">Appelez-nous maintenant</small>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm text-center h-100 hover-lift">
                        <div class="card-body p-4">
                            <div class="feature-icon bg-success bg-gradient text-white rounded-circle mx-auto mb-3">
                                <i class="fas fa-envelope fa-2x"></i>
                            </div>
                            <h5 class="fw-bold mb-3">Email</h5>
                            <p class="text-muted mb-2">contact@kanaga-services.sn</p>
                            <p class="text-muted mb-3">info@kanaga-services.sn</p>
                            <small class="text-success fw-medium">Envoyez-nous un email</small>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm text-center h-100 hover-lift">
                        <div class="card-body p-4">
                            <div class="feature-icon bg-warning bg-gradient text-white rounded-circle mx-auto mb-3">
                                <i class="fas fa-map-marker-alt fa-2x"></i>
                            </div>
                            <h5 class="fw-bold mb-3">Adresse</h5>
                            <p class="text-muted mb-2">Dakar, Sénégal</p>
                            <p class="text-muted mb-3">Zone de livraison étendue</p>
                            <small class="text-warning fw-medium">Voir sur la carte</small>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm text-center h-100 hover-lift">
                        <div class="card-body p-4">
                            <div class="feature-icon bg-danger bg-gradient text-white rounded-circle mx-auto mb-3">
                                <i class="fas fa-clock fa-2x"></i>
                            </div>
                            <h5 class="fw-bold mb-3">Horaires</h5>
                            <p class="text-muted mb-1">Lun-Ven: 8h-18h</p>
                            <p class="text-muted mb-1">Sam: 9h-16h</p>
                            <p class="text-muted mb-3">Dim: Fermé</p>
                            <small class="text-danger fw-medium">Planifier une visite</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Form -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card border-0 shadow-lg">
                        <div class="card-body p-5">
                            <?php if (isset($success) && $success): ?>
                                <!-- Success Message -->
                                <div class="text-center py-4">
                                    <div class="bg-success bg-gradient text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                        <i class="fas fa-check fa-2x"></i>
                                    </div>
                                    <h3 class="fw-bold mb-3">Message envoyé avec succès !</h3>
                                    <p class="text-muted mb-4">
                                        Nous vous répondrons dans les plus brefs délais.
                                    </p>
                                    <a href="contact.php" class="btn btn-primary">
                                        <i class="fas fa-envelope me-2"></i>
                                        Envoyer un autre message
                                    </a>
                                </div>
                            <?php else: ?>
                                <!-- Contact Form -->
                                <div class="text-center mb-5">
                                    <h2 class="display-6 fw-bold mb-3">Envoyez-nous un message</h2>
                                    <p class="text-muted">
                                        Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                                    </p>
                                </div>

                                <form method="POST" id="contactForm">
                                    <div class="row g-4">
                                        <div class="col-md-6">
                                            <label for="name" class="form-label">Nom complet *</label>
                                            <input type="text" class="form-control" id="name" name="name" required>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="email" class="form-label">Email *</label>
                                            <input type="email" class="form-control" id="email" name="email" required>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="phone" class="form-label">Téléphone</label>
                                            <input type="tel" class="form-control" id="phone" name="phone">
                                        </div>

                                        <div class="col-md-6">
                                            <label for="subject" class="form-label">Sujet *</label>
                                            <select class="form-select" id="subject" name="subject" required>
                                                <option value="">Sélectionner un sujet</option>
                                                <option value="Demande de devis">Demande de devis</option>
                                                <option value="Information sur les services">Information sur les services</option>
                                                <option value="Réclamation">Réclamation</option>
                                                <option value="Partenariat">Partenariat</option>
                                                <option value="Autre">Autre</option>
                                            </select>
                                        </div>

                                        <div class="col-12">
                                            <label for="message" class="form-label">Message *</label>
                                            <textarea class="form-control" id="message" name="message" rows="6" 
                                                      placeholder="Décrivez votre demande en détail..." required></textarea>
                                        </div>

                                        <div class="col-12">
                                            <button type="submit" name="submit_contact" class="btn btn-primary btn-lg w-100 py-3">
                                                <i class="fas fa-paper-plane me-2"></i>
                                                Envoyer le message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="text-center mb-5">
                        <h2 class="display-6 fw-bold mb-4">Questions Fréquentes</h2>
                        <p class="lead text-muted">
                            Trouvez rapidement les réponses à vos questions
                        </p>
                    </div>

                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item border-0 shadow-sm mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                    Quels sont vos tarifs ?
                                </button>
                            </h2>
                            <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Nos tarifs varient selon le service : Pressing à partir de 1500 FCFA, Couture à partir de 5000 FCFA. 
                                    Livraison gratuite dès 10000 FCFA d'achat. Contactez-nous pour un devis personnalisé.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item border-0 shadow-sm mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    Dans quelles zones livrez-vous ?
                                </button>
                            </h2>
                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Nous livrons à Dakar, Guédiawaye, Pikine et Rufisque. 
                                    Contactez-nous pour vérifier si votre zone est couverte.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item border-0 shadow-sm mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                    Quel est le délai de livraison ?
                                </button>
                            </h2>
                            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Le pressing prend 24-48h, la couture 3-7 jours selon la complexité. 
                                    Service express disponible avec supplément.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item border-0 shadow-sm mb-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                    Comment puis-je suivre ma commande ?
                                </button>
                            </h2>
                            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Après votre réservation, vous recevrez un numéro de suivi par SMS 
                                    pour suivre l'avancement de votre commande en temps réel.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="assets/js/main.js"></script>
    
    <script>
        // Form validation and enhancement
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            
            if (form) {
                form.addEventListener('submit', function(e) {
                    if (!KanagaApp.validateForm(form)) {
                        e.preventDefault();
                        KanagaApp.showAlert('Veuillez remplir tous les champs obligatoires.', 'danger');
                        return false;
                    }
                    
                    // Show loading state
                    const submitBtn = form.querySelector('button[type="submit"]');
                    KanagaApp.setLoadingState(submitBtn, true);
                });
            }
        });
    </script>
</body>
</html>