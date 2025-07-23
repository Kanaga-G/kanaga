<?php
// Get current page for active navigation
$current_page = basename($_SERVER['PHP_SELF']);
?>
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
                    <a class="nav-link <?php echo ($current_page == 'index.php') ? 'active' : ''; ?>" href="index.php">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo ($current_page == 'services.php') ? 'active' : ''; ?>" href="services.php">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo ($current_page == 'reservation.php') ? 'active' : ''; ?>" href="reservation.php">Réservation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?php echo ($current_page == 'contact.php') ? 'active' : ''; ?>" href="contact.php">Contact</a>
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
                            <li><a class="dropdown-item" href="dashboard.php">
                                <i class="fas fa-tachometer-alt me-2"></i>
                                Tableau de bord
                            </a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="logout.php">
                                <i class="fas fa-sign-out-alt me-2"></i>
                                Déconnexion
                            </a></li>
                        </ul>
                    </div>
                <?php else: ?>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">
                        <i class="fas fa-sign-in-alt me-1"></i>
                        Se connecter
                    </button>
                <?php endif; ?>
            </div>
        </div>
    </div>
</nav>

<?php if (!isset($_SESSION['user'])): ?>
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
                <form id="loginForm" action="login.php" method="POST">
                    <div id="nameField" class="mb-3 d-none">
                        <label for="name" class="form-label">Nom complet</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                        <div class="form-text">
                            <small>Essayez: admin@kanaga.sn, livreur@kanaga.sn, ou client@kanaga.sn</small>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                        <div class="form-text">
                            <small>Mot de passe: demo123</small>
                        </div>
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
<?php endif; ?>