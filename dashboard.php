<?php
session_start();

// Mock user data - in real app this would come from database
if (!isset($_SESSION['user'])) {
    // Simulate user login for demo
    $_SESSION['user'] = [
        'id' => 1,
        'name' => 'Utilisateur Demo',
        'email' => 'demo@kanaga.sn',
        'role' => 'client' // client, admin, livreur
    ];
}

$user = $_SESSION['user'];

// Mock data for dashboard
$stats = [
    'client' => [
        'active_reservations' => 2,
        'completed_services' => 5,
        'total_spent' => 45000
    ],
    'admin' => [
        'active_clients' => 1234,
        'daily_orders' => 56,
        'monthly_revenue' => 2500000,
        'satisfaction_rate' => 98
    ],
    'livreur' => [
        'daily_deliveries' => 8,
        'in_transit' => 3,
        'completed' => 5
    ]
];

$reservations = [
    [
        'id' => 'KAN001',
        'service' => 'Pressing Professionnel',
        'status' => 'in-progress',
        'date' => '2024-01-15',
        'price' => 3500,
        'description' => '2 chemises, 1 pantalon'
    ],
    [
        'id' => 'KAN002',
        'service' => 'Atelier de Couture',
        'status' => 'completed',
        'date' => '2024-01-10',
        'price' => 15000,
        'description' => 'Retouche robe de soirée'
    ],
    [
        'id' => 'KAN003',
        'service' => 'Livraison Express',
        'status' => 'pending',
        'date' => '2024-01-20',
        'price' => 2000,
        'description' => 'Collecte à domicile'
    ]
];

function getStatusBadge($status) {
    switch($status) {
        case 'pending':
            return '<span class="badge bg-warning">En attente</span>';
        case 'in-progress':
            return '<span class="badge bg-primary">En cours</span>';
        case 'completed':
            return '<span class="badge bg-success">Terminé</span>';
        case 'cancelled':
            return '<span class="badge bg-danger">Annulé</span>';
        default:
            return '<span class="badge bg-secondary">' . $status . '</span>';
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de bord - Kanaga Services</title>
    
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

    <div class="container py-5">
        <!-- Header -->
        <div class="row mb-4">
            <div class="col">
                <h1 class="display-6 fw-bold">
                    Bonjour, <?php echo htmlspecialchars($user['name']); ?> !
                </h1>
                <p class="text-muted">
                    <?php if ($user['role'] === 'admin'): ?>
                        Gérez votre entreprise Kanaga Services
                    <?php elseif ($user['role'] === 'livreur'): ?>
                        Gérez vos livraisons et collectes
                    <?php else: ?>
                        Gérez vos réservations et suivez vos commandes
                    <?php endif; ?>
                </p>
            </div>
            <div class="col-auto">
                <div class="dropdown">
                    <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        <i class="fas fa-user-cog me-1"></i>
                        Changer de rôle (Demo)
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="?role=client">Client</a></li>
                        <li><a class="dropdown-item" href="?role=admin">Administrateur</a></li>
                        <li><a class="dropdown-item" href="?role=livreur">Livreur</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <?php if ($user['role'] === 'client'): ?>
            <!-- Client Dashboard -->
            <!-- Stats Cards -->
            <div class="row g-4 mb-5">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Réservations actives</p>
                                    <h3 class="fw-bold"><?php echo $stats['client']['active_reservations']; ?></h3>
                                </div>
                                <div class="bg-primary bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-calendar-check fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Services terminés</p>
                                    <h3 class="fw-bold"><?php echo $stats['client']['completed_services']; ?></h3>
                                </div>
                                <div class="bg-success bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-check-circle fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Total dépensé</p>
                                    <h3 class="fw-bold"><?php echo number_format($stats['client']['total_spent']); ?> FCFA</h3>
                                </div>
                                <div class="bg-warning bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-coins fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="row mb-5">
                <div class="col">
                    <h4 class="fw-bold mb-4">Actions rapides</h4>
                    <div class="row g-3">
                        <div class="col-md-4">
                            <a href="reservation.php" class="card border-0 shadow-sm text-decoration-none hover-lift">
                                <div class="card-body d-flex align-items-center">
                                    <div class="bg-primary bg-gradient text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-1">Nouvelle réservation</h6>
                                        <small class="text-muted">Réserver un service</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="services.php" class="card border-0 shadow-sm text-decoration-none hover-lift">
                                <div class="card-body d-flex align-items-center">
                                    <div class="bg-success bg-gradient text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-list"></i>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-1">Nos services</h6>
                                        <small class="text-muted">Découvrir nos offres</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="contact.php" class="card border-0 shadow-sm text-decoration-none hover-lift">
                                <div class="card-body d-flex align-items-center">
                                    <div class="bg-warning bg-gradient text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-headset"></i>
                                    </div>
                                    <div>
                                        <h6 class="fw-bold mb-1">Support</h6>
                                        <small class="text-muted">Nous contacter</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Reservations -->
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white border-0 py-3">
                    <h5 class="fw-bold mb-0">Mes réservations</h5>
                </div>
                <div class="card-body">
                    <?php if (!empty($reservations)): ?>
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Service</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Statut</th>
                                        <th>Montant</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($reservations as $reservation): ?>
                                        <tr>
                                            <td class="fw-bold"><?php echo $reservation['id']; ?></td>
                                            <td><?php echo $reservation['service']; ?></td>
                                            <td><?php echo $reservation['description']; ?></td>
                                            <td><?php echo date('d/m/Y', strtotime($reservation['date'])); ?></td>
                                            <td><?php echo getStatusBadge($reservation['status']); ?></td>
                                            <td class="fw-bold"><?php echo number_format($reservation['price']); ?> FCFA</td>
                                        </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                    <?php else: ?>
                        <div class="text-center py-5">
                            <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                            <h5 class="text-muted">Aucune réservation</h5>
                            <p class="text-muted">Vous n'avez pas encore effectué de réservation</p>
                            <a href="reservation.php" class="btn btn-primary">
                                <i class="fas fa-plus me-2"></i>
                                Faire une réservation
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>

        <?php elseif ($user['role'] === 'admin'): ?>
            <!-- Admin Dashboard -->
            <!-- Stats Cards -->
            <div class="row g-4 mb-5">
                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Clients actifs</p>
                                    <h3 class="fw-bold"><?php echo number_format($stats['admin']['active_clients']); ?></h3>
                                    <small class="text-success">+12% ce mois</small>
                                </div>
                                <div class="bg-primary bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-users fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Commandes du jour</p>
                                    <h3 class="fw-bold"><?php echo $stats['admin']['daily_orders']; ?></h3>
                                    <small class="text-success">+8% aujourd'hui</small>
                                </div>
                                <div class="bg-success bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-shopping-cart fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Chiffre d'affaires</p>
                                    <h3 class="fw-bold"><?php echo number_format($stats['admin']['monthly_revenue']); ?> FCFA</h3>
                                    <small class="text-success">+15% ce mois</small>
                                </div>
                                <div class="bg-warning bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-chart-line fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Taux satisfaction</p>
                                    <h3 class="fw-bold"><?php echo $stats['admin']['satisfaction_rate']; ?>%</h3>
                                    <small class="text-success">+2% ce mois</small>
                                </div>
                                <div class="bg-info bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-star fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Orders -->
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white border-0 py-3">
                    <h5 class="fw-bold mb-0">Commandes récentes</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Client</th>
                                    <th>Service</th>
                                    <th>Statut</th>
                                    <th>Montant</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="fw-bold">#001</td>
                                    <td>Aminata Diallo</td>
                                    <td>Pressing</td>
                                    <td><span class="badge bg-primary">En cours</span></td>
                                    <td class="fw-bold">3500 FCFA</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">#002</td>
                                    <td>Mamadou Sy</td>
                                    <td>Couture</td>
                                    <td><span class="badge bg-success">Terminé</span></td>
                                    <td class="fw-bold">15000 FCFA</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fw-bold">#003</td>
                                    <td>Fatou Ndiaye</td>
                                    <td>Livraison</td>
                                    <td><span class="badge bg-warning">En attente</span></td>
                                    <td class="fw-bold">2000 FCFA</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-primary">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        <?php else: // Livreur Dashboard ?>
            <!-- Livreur Dashboard -->
            <!-- Stats Cards -->
            <div class="row g-4 mb-5">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Livraisons du jour</p>
                                    <h3 class="fw-bold"><?php echo $stats['livreur']['daily_deliveries']; ?></h3>
                                </div>
                                <div class="bg-primary bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-truck fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">En cours</p>
                                    <h3 class="fw-bold"><?php echo $stats['livreur']['in_transit']; ?></h3>
                                </div>
                                <div class="bg-warning bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-route fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <p class="text-muted mb-1">Terminées</p>
                                    <h3 class="fw-bold"><?php echo $stats['livreur']['completed']; ?></h3>
                                </div>
                                <div class="bg-success bg-gradient text-white rounded-circle p-3">
                                    <i class="fas fa-check-circle fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Deliveries List -->
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white border-0 py-3">
                    <h5 class="fw-bold mb-0">Livraisons d'aujourd'hui</h5>
                </div>
                <div class="card-body">
                    <div class="row g-4">
                        <div class="col-lg-6">
                            <div class="card border border-warning">
                                <div class="card-body">
                                    <div class="d-flex align-items-start justify-content-between mb-3">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-clock text-warning fa-2x me-3"></i>
                                            <div>
                                                <h6 class="fw-bold mb-1">Aminata Diallo</h6>
                                                <span class="badge bg-warning">Assignée</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="mb-1"><i class="fas fa-map-marker-alt text-muted me-2"></i>Médina, Rue 15 x 20, Dakar</p>
                                        <p class="mb-1"><i class="fas fa-box text-muted me-2"></i>Collecte Pressing</p>
                                        <p class="mb-1"><i class="fas fa-clock text-muted me-2"></i>Prévu à 09:00</p>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <a href="tel:+221771234567" class="btn btn-sm btn-outline-primary">
                                            <i class="fas fa-phone me-1"></i>
                                            Appeler
                                        </a>
                                        <button class="btn btn-sm btn-primary">
                                            <i class="fas fa-play me-1"></i>
                                            Commencer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-6">
                            <div class="card border border-primary">
                                <div class="card-body">
                                    <div class="d-flex align-items-start justify-content-between mb-3">
                                        <div class="d-flex align-items-center">
                                            <i class="fas fa-truck text-primary fa-2x me-3"></i>
                                            <div>
                                                <h6 class="fw-bold mb-1">Mamadou Sy</h6>
                                                <span class="badge bg-primary">En route</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="mb-1"><i class="fas fa-map-marker-alt text-muted me-2"></i>Plateau, Avenue Pompidou, Dakar</p>
                                        <p class="mb-1"><i class="fas fa-box text-muted me-2"></i>Livraison Couture</p>
                                        <p class="mb-1"><i class="fas fa-clock text-muted me-2"></i>Prévu à 11:30</p>
                                    </div>
                                    <div class="d-flex gap-2">
                                        <a href="tel:+221769876543" class="btn btn-sm btn-outline-primary">
                                            <i class="fas fa-phone me-1"></i>
                                            Appeler
                                        </a>
                                        <button class="btn btn-sm btn-success">
                                            <i class="fas fa-check me-1"></i>
                                            Livré
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </div>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="assets/js/main.js"></script>
    
    <script>
        // Handle role switching for demo
        const urlParams = new URLSearchParams(window.location.search);
        const role = urlParams.get('role');
        if (role) {
            // In a real app, this would be handled by PHP session
            fetch('switch_role.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role: role })
            }).then(() => {
                window.location.href = 'dashboard.php';
            });
        }
    </script>
</body>
</html>

<?php
// Handle role switching
if (isset($_GET['role']) && in_array($_GET['role'], ['client', 'admin', 'livreur'])) {
    $_SESSION['user']['role'] = $_GET['role'];
    
    // Update user name based on role
    switch($_GET['role']) {
        case 'admin':
            $_SESSION['user']['name'] = 'Administrateur';
            $_SESSION['user']['email'] = 'admin@kanaga.sn';
            break;
        case 'livreur':
            $_SESSION['user']['name'] = 'Livreur';
            $_SESSION['user']['email'] = 'livreur@kanaga.sn';
            break;
        default:
            $_SESSION['user']['name'] = 'Client Demo';
            $_SESSION['user']['email'] = 'client@kanaga.sn';
    }
    
    header('Location: dashboard.php');
    exit;
}
?>