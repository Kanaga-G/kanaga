<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nos Services - Kanaga Services</title>
    
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
                    <h1 class="display-4 fw-bold mb-4">Nos Services</h1>
                    <p class="lead mb-4">
                        Des solutions complètes pour l'entretien et la confection de vos vêtements
                    </p>
                    <a href="reservation.php" class="btn btn-light btn-lg">
                        <i class="fas fa-calendar-plus me-2"></i>
                        Réserver maintenant
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Details -->
    <section class="py-5">
        <div class="container">
            <!-- Pressing Service -->
            <div class="row align-items-center mb-5 py-5">
                <div class="col-lg-6">
                    <div class="d-flex align-items-center mb-4">
                        <div class="service-icon bg-primary bg-gradient text-white rounded-circle me-4">
                            <i class="fas fa-tshirt fa-3x"></i>
                        </div>
                        <div>
                            <h2 class="display-6 fw-bold mb-2">Pressing Professionnel</h2>
                            <div class="d-flex align-items-center text-muted">
                                <i class="fas fa-clock me-2"></i>
                                <span>24-48h</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="lead text-muted mb-4">
                        Service de nettoyage et repassage professionnel pour tous types de vêtements avec des produits écologiques de qualité.
                    </p>
                    
                    <h5 class="fw-bold mb-3">Caractéristiques :</h5>
                    <div class="row g-3 mb-4">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Nettoyage à sec écologique</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Repassage vapeur haute qualité</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Détachage spécialisé</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Traitement vêtements délicats</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Service express disponible</span>
                            </div>
                        </div>
                    </div>
                    
                    <a href="reservation.php" class="btn btn-primary btn-lg">
                        <i class="fas fa-star me-2"></i>
                        Réserver ce service
                    </a>
                </div>
                
                <div class="col-lg-6">
                    <div class="card border-0 shadow-lg">
                        <div class="card-body p-4">
                            <h4 class="card-title fw-bold text-center mb-4">Nos Tarifs Pressing</h4>
                            <div class="list-group list-group-flush">
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Chemise/Blouse</span>
                                    <span class="fw-bold text-primary">1 500 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Pantalon/Jupe</span>
                                    <span class="fw-bold text-primary">2 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Veste/Blazer</span>
                                    <span class="fw-bold text-primary">3 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Robe</span>
                                    <span class="fw-bold text-primary">2 500 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Costume complet</span>
                                    <span class="fw-bold text-primary">5 000 FCFA</span>
                                </div>
                            </div>
                            <div class="alert alert-primary mt-4">
                                <i class="fas fa-star me-2"></i>
                                <small>Devis gratuit pour les commandes importantes</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="my-5">

            <!-- Couture Service -->
            <div class="row align-items-center mb-5 py-5">
                <div class="col-lg-6 order-lg-2">
                    <div class="d-flex align-items-center mb-4">
                        <div class="service-icon bg-success bg-gradient text-white rounded-circle me-4">
                            <i class="fas fa-cut fa-3x"></i>
                        </div>
                        <div>
                            <h2 class="display-6 fw-bold mb-2">Atelier de Couture</h2>
                            <div class="d-flex align-items-center text-muted">
                                <i class="fas fa-clock me-2"></i>
                                <span>3-7 jours</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="lead text-muted mb-4">
                        Confection sur mesure et retouches par nos tailleurs expérimentés avec un savoir-faire artisanal.
                    </p>
                    
                    <h5 class="fw-bold mb-3">Caractéristiques :</h5>
                    <div class="row g-3 mb-4">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Confection sur mesure</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Retouches et ajustements</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Réparations expertes</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Création de modèles uniques</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Conseils personnalisés</span>
                            </div>
                        </div>
                    </div>
                    
                    <a href="reservation.php" class="btn btn-success btn-lg">
                        <i class="fas fa-star me-2"></i>
                        Réserver ce service
                    </a>
                </div>
                
                <div class="col-lg-6 order-lg-1">
                    <div class="card border-0 shadow-lg">
                        <div class="card-body p-4">
                            <h4 class="card-title fw-bold text-center mb-4">Nos Tarifs Couture</h4>
                            <div class="list-group list-group-flush">
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Retouche simple</span>
                                    <span class="fw-bold text-success">2 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Ajustement complet</span>
                                    <span class="fw-bold text-success">5 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Confection robe</span>
                                    <span class="fw-bold text-success">25 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Costume sur mesure</span>
                                    <span class="fw-bold text-success">50 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Réparation</span>
                                    <span class="fw-bold text-success">3 000 FCFA</span>
                                </div>
                            </div>
                            <div class="alert alert-success mt-4">
                                <i class="fas fa-star me-2"></i>
                                <small>Consultation gratuite pour vos projets</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="my-5">

            <!-- Livraison Service -->
            <div class="row align-items-center mb-5 py-5">
                <div class="col-lg-6">
                    <div class="d-flex align-items-center mb-4">
                        <div class="service-icon bg-warning bg-gradient text-white rounded-circle me-4">
                            <i class="fas fa-truck fa-3x"></i>
                        </div>
                        <div>
                            <h2 class="display-6 fw-bold mb-2">Livraison à Domicile</h2>
                            <div class="d-flex align-items-center text-muted">
                                <i class="fas fa-clock me-2"></i>
                                <span>Même jour possible</span>
                            </div>
                        </div>
                    </div>
                    
                    <p class="lead text-muted mb-4">
                        Service de collecte et livraison pour votre confort avec suivi en temps réel de vos commandes.
                    </p>
                    
                    <h5 class="fw-bold mb-3">Caractéristiques :</h5>
                    <div class="row g-3 mb-4">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Collecte gratuite à domicile</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Livraison rapide 24-48h</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Suivi en temps réel</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Service programmé</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-check-circle text-success me-2"></i>
                                <span>Zone de livraison étendue</span>
                            </div>
                        </div>
                    </div>
                    
                    <a href="reservation.php" class="btn btn-warning btn-lg">
                        <i class="fas fa-star me-2"></i>
                        Réserver ce service
                    </a>
                </div>
                
                <div class="col-lg-6">
                    <div class="card border-0 shadow-lg">
                        <div class="card-body p-4">
                            <h4 class="card-title fw-bold text-center mb-4">Nos Tarifs Livraison</h4>
                            <div class="list-group list-group-flush">
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Livraison standard</span>
                                    <span class="fw-bold text-warning">Gratuite dès 10 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Livraison express</span>
                                    <span class="fw-bold text-warning">2 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Collecte uniquement</span>
                                    <span class="fw-bold text-warning">1 000 FCFA</span>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center border-0 py-3">
                                    <span>Service programmé</span>
                                    <span class="fw-bold text-warning">1 500 FCFA</span>
                                </div>
                            </div>
                            <div class="alert alert-warning mt-4">
                                <i class="fas fa-map-marker-alt me-2"></i>
                                <small>Zone de livraison : Dakar, Guédiawaye, Pikine, Rufisque</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <h2 class="display-6 fw-bold mb-4">Prêt à profiter de nos services ?</h2>
                    <p class="lead text-muted mb-4">
                        Réservez dès maintenant ou contactez-nous pour un devis personnalisé
                    </p>
                    <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                        <a href="reservation.php" class="btn btn-primary btn-lg">
                            <i class="fas fa-calendar-plus me-2"></i>
                            Réserver maintenant
                        </a>
                        <a href="contact.php" class="btn btn-outline-primary btn-lg">
                            <i class="fas fa-envelope me-2"></i>
                            Demander un devis
                        </a>
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
</body>
</html>