<?php
require_once 'class/User.php';

/* Si le formulaire est envoyé, que les inputs ne sont pas vides alors on stocke les inputs dans des variables
    puis on instancie un objet de la classe user et l'on appelle la fonction connection */
if (!empty($_POST['login']) && !empty($_POST['password'])) {
    $login = htmlspecialchars($_POST['login']);
    $password = htmlspecialchars($_POST['password']);
    
    $user->connect($login, $password);
    // die pour éviter que le json ne soit corrompu par le html
    die();
}
?>

<!doctype html>
<html lang="fr">
<body>
<div class="container-div">
    <form id="form-connection" method="post">
        <div class="title-form-container">
            <div class="head-form">
                <h2 class="title-form">Connexion</h2>
            </div>
        </div>

        <div class="input-form-container">
            <div class="form-control">
                <label for="login">Login</label>
                <input id="login" class="login-connect" name="login" type="text" placeholder="Login">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Erreur</small>
            </div>

            <div class="form-control">
                <label for="password">Mot de passe</label>
                <input id="password" class="password-connect" name="password" type="password" placeholder="Mot de passe">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Erreur</small>
            </div>
            <button type="submit" class="register_form_button" id="envoie" name="envoie">Se connecter</button>
        </div>
    </form>
</div>
</body>
</html>
