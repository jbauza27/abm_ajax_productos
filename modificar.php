<?php
require('clases/connection.php');
require('clases/Producto.php');

$producto = new Producto();
$producto->modificarProducto($_POST['codigo'], $_POST['producto'], $_POST['descripcion'], $_POST['precio']);
?>