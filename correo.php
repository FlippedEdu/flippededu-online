<?php
  $destinatario = "juangrios27@gmail.com";
  $nombre=$_POST['name_lastname'];
  $email=$_POST['email'];
  $telefono=$_POST['phone'];
  $mensaje=$_POST['Consulta'];

  $header = "Enviado desde la pagina de FLIPPED";
  $mensajeCompleto = "Nombre y apellido: $nombre \n";
  $mensajeCompleto .= "email: $email \n";
  $mensajeCompleto .= "telefono: $telefono \n";
  $mensajeCompleto .= "Asunto: $mensaje";

  mail($destinatario, $mensajeCompleto, $header);
  echo "<script>alert('Correo enviado exitosamente')</script>";
  echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
?>