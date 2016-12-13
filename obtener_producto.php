<?php
require('clases/connection.php');
require('clases/Producto.php');

$producto = new Producto();
$producto = $producto->buscarProducto($_POST['codigo']);

foreach($producto as $unproducto) {
  $array = array("codigo"=>$unproducto['codigo'], "producto"=>$unproducto['producto'], "descripcion"=>$unproducto['descripcion'], "precio"=>$unproducto['precio']);
  print_r(json_encode($array));
}
?>