<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $name                 = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
    $lastName             = filter_input(INPUT_POST, 'lastName', FILTER_SANITIZE_SPECIAL_CHARS);
    $tel                  = filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_SPECIAL_CHARS);
    $email                = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
    $gender               = filter_input(INPUT_POST, 'gender', FILTER_SANITIZE_SPECIAL_CHARS);
    $read                 = filter_input(INPUT_POST, 'read', FILTER_SANITIZE_SPECIAL_CHARS);
    $play                 = filter_input(INPUT_POST, 'play', FILTER_SANITIZE_SPECIAL_CHARS);
    $dance                = filter_input(INPUT_POST, 'dance', FILTER_SANITIZE_SPECIAL_CHARS);
    $run                  = filter_input(INPUT_POST, 'run', FILTER_SANITIZE_SPECIAL_CHARS);
    $nationality          = filter_input(INPUT_POST, 'nationality', FILTER_SANITIZE_SPECIAL_CHARS);
    $message              = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
    $isReadSelected       = $read ? "si" : "no";
    $isDanceSelected      = $dance ? "si" : "no";
    $isRunSelected        = $run ? "si" : "no";
    $isPlaySelected       = $play ? "si" : "no";
    $comments             = '<div>  Nombre: '                   . $name
                            . '<br /> Apellido: '               . $lastName
                            . '<br /> Teléfono: '               . $tel
                            . '<br /> Correo electrónico: '     . $email
                            . '<br /> Sexo: '                   . $gender
                            . '<br /> Leer: '                   . $isReadSelected
                            . '<br /> Jugar: '                  . $isPlaySelected
                            . '<br /> Bailar: '                 . $isDanceSelected
                            . '<br /> Correr: '                 . $isRunSelected
                            . '<br /> Nacionalidad: '           . $nationality
                            . '<br /> Mensaje: '                . $message
                            . '</div>';

    require_once 'PHPMailerAutoload.php';
    $phpmailer = new PHPMailer();

    $phpmailer->IsHTML( TRUE );
    $phpmailer->ClearAddresses();
    $phpmailer->AddAddress( 'paola.em.dg@gmail.com', 'Paola Elizalde' );  // Correo del destinatario y nombre
    $phpmailer->addBCC( '' );                                           // Correo CC
    //$phpmailer->IsSMTP();
    $phpmailer->SMTPDebug  = 0;
    $phpmailer->CharSet    = 'UTF-8';
    $phpmailer->SMTPAuth   = true;
    $phpmailer->SMTPSecure = 'ssl';
    $phpmailer->Host       = 'mail.sfumino.mx';                    // Servidor de correo saliente SMTP
    $phpmailer->Port       = 465;                                       // Puerto de correo saliente SMTP
    $phpmailer->Username   = 'paola@sfumino.mx';                       // Usuario del correo electrónico
    $phpmailer->Password   = '$Paola_01*';                               // Contraseña del correo electrónico
    $phpmailer->From       = 'edumac@sfumino.mx';                       // From
    $phpmailer->FromName   = 'Sfumino MX';                              // From Name
    $phpmailer->Subject    = 'Contacto';                                // Subject
    $phpmailer->MsgHTML( $comments ); ?>

    <?php if ( $phpmailer->Send() ): ?>
        <p>El correo electrónico se ha enviado</p><!-- HTML que se mostrará cuando el correo se envíe correctamente. -->
    <?php else: ?>
        <p class="error">Ocurrio un error al enviar los datos</p><!-- HTML en caso de error de envío. -->
    <?php endif; ?>
