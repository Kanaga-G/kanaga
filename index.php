<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kanaga Services - Pressing & Atelier de Couture</title>
    
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
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="index.php">
                <div class="d-flex align-items-center">
                    <div class="brand-icon bg-primary text-white rounded me-2 d-flex align-items-center justify-content-center">
                        <span class="fw-bold">K</span>
                    </div>
                    Kanaga
                </div>
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.php">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="services.php">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="reservation.php">Réservation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.php">Contact</a>
                    </li>
                </ul>
                
                <div class="d-flex">
                    <?php if (isset($_SESSION['user'])): ?>
                        <div class="dropdown">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                <i class="fas fa-user me-1"></i>
                                <?php echo htmlspecialchars($_SESSION['user']['name']); ?>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="dashboard.php">Tableau de bord</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="logout.php">Déconnexion</a></li>
                            </ul>
                        </div>
                    <?php else: ?>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">
                            Se connecter
                        </button>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="row min-vh-100 align-items-center">
                <div class="col-lg-8 mx-auto text-center text-white">
                    <h1 class="display-3 fw-bold mb-4 animate-fade-in">
                        Kanaga Services
                        <span class="d-block h2 fw-normal mt-2 text-light">
                            Pressing & Atelier de Couture
                        </span>
                    </h1>
                    
                    <p class="lead mb-5 animate-fade-in" style="animation-delay: 0.2s;">
                        Votre partenaire de confiance pour un service de pressing professionnel 
                        et un atelier de couture sur mesure
                    </p>

                    <!-- Features Cards -->
                    <div class="row g-4 mb-5">
                        <div class="col-md-4">
                            <div class="feature-card animate-fade-in" style="animation-delay: 0.4s;">
                                <i class="fas fa-sparkles fa-3x text-warning mb-3"></i>
                                <h5 class="fw-semibold">Qualité Premium</h5>
                                <p class="text-light">Service de qualité professionnelle pour tous vos vêtements</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-card animate-fade-in" style="animation-delay: 0.6s;">
                                <i class="fas fa-clock fa-3x text-success mb-3"></i>
                                <h5 class="fw-semibold">Livraison Rapide</h5>
                                <p class="text-light">Service de livraison à domicile en 24-48h</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature-card animate-fade-in" style="animation-delay: 0.8s;">
                                <i class="fas fa-shield-alt fa-3x text-info mb-3"></i>
                                <h5 class="fw-semibold">Satisfaction Garantie</h5>
                                <p class="text-light">Vos vêtements traités avec le plus grand soin</p>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center animate-fade-in" style="animation-delay: 1s;">
                        <a href="reservation.php" class="btn btn-light btn-lg px-4 py-3">
                            <i class="fas fa-calendar-plus me-2"></i>
                            Réserver maintenant
                        </a>
                        <a href="services.php" class="btn btn-outline-light btn-lg px-4 py-3">
                            Découvrir nos services
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
            <div class="scroll-mouse"></div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center mb-5">
                    <h2 class="display-5 fw-bold mb-4">Nos Services</h2>
                    <p class="lead text-muted">
                        Des solutions complètes pour l'entretien et la confection de vos vêtements
                    </p>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="card service-card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="service-icon bg-primary bg-gradient text-white rounded-circle mx-auto mb-4">
                                <i class="fas fa-tshirt fa-2x"></i>
                            </div>
                            <h4 class="card-title fw-bold mb-3">Pressing Professionnel</h4>
                            <p class="card-text text-muted mb-4">
                                Nettoyage, repassage et entretien de tous types de vêtements avec des produits de qualité.
                            </p>
                            <ul class="list-unstyled mb-4">
                                <li><i class="fas fa-check text-success me-2"></i>Nettoyage à sec</li>
                                <li><i class="fas fa-check text-success me-2"></i>Repassage vapeur</li>
                                <li><i class="fas fa-check text-success me-2"></i>Détachage spécialisé</li>
                            </ul>
                            <p class="fw-bold text-primary mb-3">À partir de 1500 FCFA</p>
                            <a href="reservation.php" class="btn btn-primary">Réserver</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card service-card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="service-icon bg-success bg-gradient text-white rounded-circle mx-auto mb-4">
                                <i class="fas fa-cut fa-2x"></i>
                            </div>
                            <h4 class="card-title fw-bold mb-3">Atelier de Couture</h4>
                            <p class="card-text text-muted mb-4">
                                Confection sur mesure, retouches et réparations par nos tailleurs expérimentés.
                            </p>
                            <ul class="list-unstyled mb-4">
                                <li><i class="fas fa-check text-success me-2"></i>Confection sur mesure</li>
                                <li><i class="fas fa-check text-success me-2"></i>Retouches</li>
                                <li><i class="fas fa-check text-success me-2"></i>Réparations</li>
                            </ul>
                            <p class="fw-bold text-primary mb-3">À partir de 5000 FCFA</p>
                            <a href="reservation.php" class="btn btn-primary">Réserver</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card service-card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="service-icon bg-warning bg-gradient text-white rounded-circle mx-auto mb-4">
                                <i class="fas fa-truck fa-2x"></i>
                            </div>
                            <h4 class="card-title fw-bold mb-3">Livraison à Domicile</h4>
                            <p class="card-text text-muted mb-4">
                                Service de collecte et livraison à domicile pour votre confort.
                            </p>
                            <ul class="list-unstyled mb-4">
                                <li><i class="fas fa-check text-success me-2"></i>Collecte gratuite</li>
                                <li><i class="fas fa-check text-success me-2"></i>Livraison 24-48h</li>
                                <li><i class="fas fa-check text-success me-2"></i>Suivi en temps réel</li>
                            </ul>
                            <p class="fw-bold text-primary mb-3">Gratuite dès 10000 FCFA</p>
                            <a href="reservation.php" class="btn btn-primary">Réserver</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center mb-5">
                    <h2 class="display-5 fw-bold mb-4">Pourquoi nous choisir ?</h2>
                    <p class="lead text-muted">
                        Découvrez les avantages qui font de Kanaga Services votre meilleur choix
                    </p>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="text-center p-4">
                        <div class="feature-icon bg-success bg-gradient text-white rounded-circle mx-auto mb-3">
                            <i class="fas fa-check-circle fa-2x"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Qualité Garantie</h5>
                        <p class="text-muted">
                            Nous garantissons la qualité de notre travail et la satisfaction de nos clients.
                        </p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="text-center p-4">
                        <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mx-auto mb-3">
                            <i class="fas fa-clock fa-2x"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Service Rapide</h5>
                        <p class="text-muted">
                            Livraison en 24-48h pour la plupart de nos services avec suivi en temps réel.
                        </p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="text-center p-4">
                        <div class="feature-icon bg-warning bg-gradient text-white rounded-circle mx-auto mb-3">
                            <i class="fas fa-shield-alt fa-2x"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Sécurité Assurée</h5>
                        <p class="text-muted">
                            Vos vêtements sont assurés et traités avec le plus grand soin.
                        </p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="text-center p-4">
                        <div class="feature-icon bg-info bg-gradient text-white rounded-circle mx-auto mb-3">
                            <i class="fas fa-users fa-2x"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Équipe Expérimentée</h5>
                        <p class="text-muted">
                            Une équipe de professionnels expérimentés à votre service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center mb-5">
                    <h2 class="display-5 fw-bold mb-4">Témoignages Clients</h2>
                    <p class="lead text-muted">
                        Découvrez ce que nos clients disent de nos services
                    </p>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="card testimonial-card border-0 shadow-sm h-100">
                        <div class="card-body text-center p-4">
                            <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
                            <p class="card-text fst-italic mb-4">
                                "Excellent service ! Mes vêtements sont toujours impeccables et la livraison est toujours ponctuelle."
                            </p>
                            <div class="mb-3">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                                     alt="Aminata Diallo" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h6 class="fw-bold mb-0">Aminata Diallo</h6>
                                    <small class="text-muted">Cliente fidèle</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card testimonial-card border-0 shadow-sm h-100">
                        <div class="card-body text-center p-4">
                            <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
                            <p class="card-text fst-italic mb-4">
                                "Je recommande vivement Kanaga Services pour la qualité de leur travail et leur professionnalisme."
                            </p>
                            <div class="mb-3">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                                     alt="Mamadou Sy" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h6 class="fw-bold mb-0">Mamadou Sy</h6>
                                    <small class="text-muted">Professionnel</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card testimonial-card border-0 shadow-sm h-100">
                        <div class="card-body text-center p-4">
                            <i class="fas fa-quote-left fa-2x text-primary mb-3"></i>
                            <p class="card-text fst-italic mb-4">
                                "Service de couture exceptionnel ! Ils ont confectionné ma robe de mariage et c'était parfait."
                            </p>
                            <div class="mb-3">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                                     alt="Fatou Ndiaye" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h6 class="fw-bold mb-0">Fatou Ndiaye</h6>
                                    <small class="text-muted">Entrepreneuse</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
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
                        <li class="mb-2"><a href="index.php" class="text-light text-decoration-none">Accueil</a></li>
                        <li class="mb-2"><a href="services.php" class="text-light text-decoration-none">Nos Services</a></li>
                        <li class="mb-2"><a href="reservation.php" class="text-light text-decoration-none">Réservation</a></li>
                        <li class="mb-2"><a href="contact.php" class="text-light text-decoration-none">Contact</a></li>
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
                </div>
            </div>

            <hr class="my-4">
            <div class="text-center">
                <p class="text-muted mb-0">
                    © 2024 Kanaga Services. Tous droits réservés.
                </p>
            </div>
        </div>
    </footer>

    <!-- Auth Modal -->
    <div class="modal fade" id="authModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title fw-bold" id="authModalTitle">Connexion</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div id="authError" class="alert alert-danger d-none"></div>
                    
                    <!-- Login Form -->
                    <form id="loginForm">
                        <div id="nameField" class="mb-3 d-none">
                            <label for="name" class="form-label">Nom complet</label>
                            <input type="text" class="form-control" id="name" name="name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Mot de passe</label>
                            <input type="password" class="form-control" id="password" name="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mb-3" id="authSubmitBtn">
                            Se connecter
                        </button>
                    </form>
                    
                    <div class="text-center">
                        <p class="mb-0">
                            <span id="authToggleText">Pas encore de compte ?</span>
                            <button type="button" class="btn btn-link p-0 ms-1" id="authToggleBtn">
                                S'inscrire
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

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

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="assets/js/main.js"></script>
</body>
</html>