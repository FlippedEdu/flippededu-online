<?php  
// Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
// Datos para el correo
$destinatario = "allentiacweb@gmail.com";
$asunto = "Consulta-Web: PEGAMENTO FULL-MIX 30KG (chekear si es pegamento para ceramico o porcelanato)";
$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";
// Enviando Mensaje
mail($destinatario, $asunto, $carta);

header('Location:mensaje-de-envio-adhesivo.html');
?>