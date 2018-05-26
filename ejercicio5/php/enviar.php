<?php
        $myName = "Paola";
        $myLastName = "Elizalde";
        $myAge = "22";

        $mydata = "Mi nombre completo es "
         .$myName
         ." " 
         .$myLastName
         . ", y tengo "
         .$myAge
         ." años.";

    
    $name = $_POST["name"];
    $lastName = $_POST["lastName"];
    $tel = $_POST["tel"];
    $email = $_POST["email"];
    $gender = $_POST["gender"];
    $read = $_POST["read"];
    $play = $_POST["play"];
    $dance = $_POST["dance"];
    $run = $_POST["run"];
    $nationality = $_POST["nationality"];
    $message = $_POST["message"];

    $isReadSelected = $read ? "si" : "no";
    $isDanceSelected = $dance ? "si" : "no";
    $isRunSelected = $run ? "si" : "no";
    $isPlaySelected = $play ? "si" : "no";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mis datos</title>
</head>
<body>
    <div class="container">
        <header class="page-header">
            <h1>Mis datos</h1>
        </header>
        <main class="page-main">
            <section class="page-section">
            <ul>
                <li>Nombre: <Strong><?php echo $name; ?></Strong></li>
                <li>Apellido: <strong><?php echo $lastName; ?></strong></li>
                <li>Teléfono: <strong><?php echo $tel; ?></strong></li>
                <li>Correo electrónico: <strong><?php echo $email; ?></strong></li>
                <li>Sexo: <strong><?php echo $gender; ?></strong></li>
                <li>Leer: <strong><?php echo $isReadSelected; ?></strong></li>
                <li>Jugar: <strong><?php echo $isPlaySelected; ?></strong></li>
                <li>Bailar: <strong><?php echo $isDanceSelected; ?></strong></li>
                <li>Correr: <strong><?php echo $isRunSelected; ?></strong></li>
                <li>Nacionalidad: <strong><?php echo $nationality; ?></strong></li>
                <li>Mensaje: <strong><?php echo $message; ?></strong></li>
            </ul>
            </section>
        </main>
    </div>
</body>
</html>