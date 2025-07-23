<?php
session_start();

if ($_POST) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $name = $_POST['name'] ?? '';
    
    // Simple demo authentication
    if ($password === 'demo123') {
        // Determine role based on email
        $role = 'client';
        if (strpos($email, 'admin') !== false) {
            $role = 'admin';
            $name = 'Administrateur';
        } elseif (strpos($email, 'livreur') !== false) {
            $role = 'livreur';
            $name = 'Livreur';
        } else {
            $name = $name ?: 'Client Demo';
        }
        
        $_SESSION['user'] = [
            'id' => 1,
            'name' => $name,
            'email' => $email,
            'role' => $role
        ];
        
        header('Location: dashboard.php');
        exit;
    } else {
        $_SESSION['auth_error'] = 'Email ou mot de passe incorrect';
        header('Location: index.php');
        exit;
    }
}

// If accessed directly, redirect to home
header('Location: index.php');
exit;
?>