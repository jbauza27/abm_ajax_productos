<?php
require('clases/connection.php');
require('clases/Producto.php');

$producto = new Producto();
$producto->bajaProducto($_POST['codigo']);
?>


