<?php
require('clases/connection.php');
require('clases/Producto.php');

$producto = new Producto();
$productos = $producto->obtenerTodosLosProductos();

foreach($productos as $unproducto) {
	$cod = $unproducto['codigo'];
	echo
	  "<tr>
			<td class='text-center'>$unproducto[codigo]</td>
			<td>$unproducto[producto]</td>
			<td>$unproducto[descripcion]</td>
			<td class='text-center'>$unproducto[precio]</td>
			<td class='text-center'><span onclick='cargarDatos($cod);' class='glyphicon glyphicon-pencil'></span></td>
			<td class='text-center'><span onclick='borradoDatos($cod);' class='glyphicon glyphicon-remove'></span></td>
	  </tr>";
}

?>
