<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <script type="text/javascript" src="app/module_authentification.js" defer></script>
    <script src="https://kit.fontawesome.com/75738720bb.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="assets/style.css" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <title>Authentification</title>
</head>
<body>
    <?php
    require('header_auth.php');
    ?>
    <main>
            <div id="message-auth-form"></div>
            <div id="form-auth"></div>
            <div id="connexion-ok">
                <?php if (isset($_SESSION['login'])&& !empty($_SESSION['login'])){
                        echo "Vous êtes toujours connecté ".$_SESSION['login'];
                }
                ?>
            </div>

</main>


</body>
</html>