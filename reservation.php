<?php
session_start();

// Handle form submission
if ($_POST && isset($_POST['submit_reservation'])) {
    // In a real application, you would validate and save to database
    $success = true;
    $reservation_data = [
        'service' => $_POST['service'] ?? '',
        'name' => $_POST['name'] ?? '',
        'phone' => $_POST['phone'] ?? '',
        'email' => $_POST['email'] ?? '',
        'address' => $_POST['address'] ?? '',
        'date' => $_POST['date'] ?? '',
        'time' => $_POST['time'] ?? '',
        'description' => $_POST['description'] ?? ''
    ];
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réservation - Kanaga Services</title>
    
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

    <?php if (isset($success) && $success): ?>
        <!-- Success Page -->
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card border-0 shadow-lg text-center">
                        <div class="card-body p-5">
                            <div class="mb-4">
                                <div class="bg-success bg-gradient text-white rounded-circle mx-auto d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                                    <i class="fas fa-check fa-2x"></i>
                                </div>
                            </div>
                            <h2 class="fw-bold mb-4">Réservation Confirmée !</h2>
                            <p class="text-muted mb-4">
                                Merci pour votre réservation. Nous vous contacterons bientôt pour confirmer les détails.
                            </p>
                            
                            <div class="bg-light rounded p-4 mb-4">
                                <h5 class="fw-bold mb-3">Détails de votre réservation :</h5>
                                <div class="text-start">
                                    <p class="mb-2"><strong>Service :</strong> <?php echo htmlspecialchars($reservation_data['service']); ?></p>
                                    <p class="mb-2"><strong>Date :</strong> <?php echo date('d/m/Y', strtotime($reservation_data['date'])); ?></p>
                                    <p class="mb-0"><strong>Heure :</strong> <?php echo htmlspecialchars($reservation_data['time']); ?></p>
                                </div>
                            </div>
                            
                            <div class="d-flex gap-3 justify-content-center">
                                <a href="reservation.php" class="btn btn-primary">
                                    <i class="fas fa-plus me-2"></i>
                                    Nouvelle réservation
                                </a>
                                <a href="index.php" class="btn btn-outline-primary">
                                    <i class="fas fa-home me-2"></i>
                                    Retour à l'accueil
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php else: ?>
        <!-- Hero Section -->
        <section class="hero-section py-5">
            <div class="hero-overlay"></div>
            <div class="container">
                <div class="row align-items-center min-vh-50">
                    <div class="col-lg-8 mx-auto text-center text-white">
                        <h1 class="display-4 fw-bold mb-4">Réserver un Service</h1>
                        <p class="lead">
                            Remplissez le formulaire ci-dessous pour réserver nos services
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reservation Form -->
        <section class="py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="card border-0 shadow-lg">
                            <div class="card-body p-5">
                                <form method="POST" id="reservationForm">
                                    <div class="row g-4">
                                        <!-- Service Selection -->
                                        <div class="col-12">
                                            <h3 class="fw-bold mb-4">Sélectionnez votre service</h3>
                                            <div class="row g-3">
                                                <div class="col-md-6">
                                                    <input type="radio" class="btn-check" name="service" id="pressing" value="Pressing Professionnel" required>
                                                    <label class="btn btn-outline-primary w-100 p-4 text-start" for="pressing">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-tshirt fa-2x me-3"></i>
                                                            <div>
                                                                <h5 class="mb-1">Pressing Professionnel</h5>
                                                                <small class="text-muted">À partir de 1500 FCFA</small>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="radio" class="btn-check" name="service" id="couture" value="Atelier de Couture" required>
                                                    <label class="btn btn-outline-success w-100 p-4 text-start" for="couture">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-cut fa-2x me-3"></i>
                                                            <div>
                                                                <h5 class="mb-1">Atelier de Couture</h5>
                                                                <small class="text-muted">À partir de 5000 FCFA</small>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="radio" class="btn-check" name="service" id="livraison" value="Livraison à Domicile" required>
                                                    <label class="btn btn-outline-warning w-100 p-4 text-start" for="livraison">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-truck fa-2x me-3"></i>
                                                            <div>
                                                                <h5 class="mb-1">Livraison à Domicile</h5>
                                                                <small class="text-muted">Gratuite dès 10000 FCFA</small>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="radio" class="btn-check" name="service" id="express" value="Service Express" required>
                                                    <label class="btn btn-outline-danger w-100 p-4 text-start" for="express">
                                                        <div class="d-flex align-items-center">
                                                            <i class="fas fa-bolt fa-2x me-3"></i>
                                                            <div>
                                                                <h5 class="mb-1">Service Express</h5>
                                                                <small class="text-muted">Supplément 50%</small>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Personal Information -->
                                        <div class="col-lg-6">
                                            <h4 class="fw-bold mb-4">Informations personnelles</h4>
                                            <div class="mb-3">
                                                <label for="name" class="form-label">Nom complet *</label>
                                                <input type="text" class="form-control" id="name" name="name" required>
                                            </div>
                                            <div class="mb-3">
                                                <label for="phone" class="form-label">Téléphone *</label>
                                                <input type="tel" class="form-control" id="phone" name="phone" required>
                                            </div>
                                            <div class="mb-3">
                                                <label for="email" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="email" name="email">
                                            </div>
                                            <div class="mb-3">
                                                <label for="address" class="form-label">Adresse de collecte *</label>
                                                <input type="text" class="form-control" id="address" name="address" required>
                                            </div>
                                        </div>

                                        <!-- Date and Time -->
                                        <div class="col-lg-6">
                                            <h4 class="fw-bold mb-4">Date et heure</h4>
                                            <div class="mb-3">
                                                <label for="date" class="form-label">
                                                    <i class="fas fa-calendar me-1"></i>
                                                    Date souhaitée *
                                                </label>
                                                <input type="date" class="form-control" id="date" name="date" 
                                                       min="<?php echo date('Y-m-d'); ?>" required>
                                            </div>
                                            <div class="mb-3">
                                                <label for="time" class="form-label">
                                                    <i class="fas fa-clock me-1"></i>
                                                    Heure préférée *
                                                </label>
                                                <select class="form-select" id="time" name="time" required>
                                                    <option value="">Sélectionner une heure</option>
                                                    <option value="08:00">08:00</option>
                                                    <option value="09:00">09:00</option>
                                                    <option value="10:00">10:00</option>
                                                    <option value="11:00">11:00</option>
                                                    <option value="12:00">12:00</option>
                                                    <option value="14:00">14:00</option>
                                                    <option value="15:00">15:00</option>
                                                    <option value="16:00">16:00</option>
                                                    <option value="17:00">17:00</option>
                                                    <option value="18:00">18:00</option>
                                                </select>
                                            </div>
                                            
                                            <div class="alert alert-info">
                                                <div class="d-flex align-items-start">
                                                    <i class="fas fa-map-marker-alt me-2 mt-1"></i>
                                                    <div>
                                                        <strong>Zone de livraison :</strong><br>
                                                        <small>Dakar, Guédiawaye, Pikine, Rufisque</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Additional Information -->
                                        <div class="col-12">
                                            <label for="description" class="form-label">Instructions spéciales (optionnel)</label>
                                            <textarea class="form-control" id="description" name="description" rows="4" 
                                                      placeholder="Décrivez vos besoins spécifiques, type de vêtements, instructions particulières..."></textarea>
                                        </div>

                                        <!-- Submit Button -->
                                        <div class="col-12">
                                            <button type="submit" name="submit_reservation" class="btn btn-primary btn-lg w-100 py-3">
                                                <i class="fas fa-check-circle me-2"></i>
                                                Confirmer la réservation
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="assets/js/main.js"></script>
    
    <script>
        // Form validation and enhancement
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('reservationForm');
            
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