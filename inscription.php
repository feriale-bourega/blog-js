<?php
require_once 'class/User.php';



if(isset($_POST) && !empty($_POST['login']) &&!empty($_POST['password']) && !empty($_POST['passwordConfirm'])) {
    $user = 'utilisateur';
    $bio = "Aucune biographie n'a été renseignée";
    
    $user->register($_POST['login'], $_POST['password'], $_POST['passwordConfirm'], $_POST['email'], $user, $bio);
    die(); // permet que le code s'arrête avant d'afficher le formulaire pour éviter de poser problème avec le json
}
?>

<!doctype html>
<html lang="fr">
<body>
<div class="container-div">
    <form id="form-register" method="post">
        <div class="title-form-container">
            <div class="head-form">
                <h2 class="title-form">Inscription</h2>
            </div>
        </div>

        <div class="input-form-container">
            <div class="form-control">
                <label for="login">Login <span id="login-asterisk">*</span></label>
                <input id="login" name="login" type="text" placeholder="Login">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Erreur</small>
            </div>

            <div class="form-control">
                <label for="prenom">Email</label>
                <input id="prenom" name="prenom" type="text" placeholder="Prénom">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Erreur</small>
            </div>

            <div class="form-control">
                <label for="nom">Password</label>
                <input id="nom" name="nom" type="text" placeholder="Nom">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Erreur</small>
            </div>

            <div class="form-control">
                <label for="password">PasswordConfirm <span id="login-asterisk">*</span></label>
                <input id="password" name="password" type="password" placeholder="Mot de passe">
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Erreur</small>
            </div>
                <button type="submit" class="register_form_button" id="envoie" name="envoie">S'inscrire</button>
                <p id="login-condition">* Le login et le mot de passe doivent posséder au moins 3 caractères</p>

    </form>
</div>
</body>
</html>


