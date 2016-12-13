<?php
require('Database.php');

class Producto {
  private $db;
  
  public function __construct() {
    $this->db = new Database();
  }
  
  public function __destruct() {
    $this->db = null;
  }
  
  public function obtenerTodosLosProductos() {
    return $this->db->query("SELECT * FROM productos ORDER BY codigo DESC");
  }
  
  public function altaProducto($codigo, $producto, $descripcion, $precio) {
    $this->db->query("INSERT INTO productos (codigo, producto, descripcion, precio) VALUES ($codigo, '$producto', '$descripcion', $precio)");
  }

  public function modificarProducto($codigo, $producto, $descripcion, $precio) {
    $this->db->query("UPDATE productos SET producto = '$producto', descripcion = '$descripcion', precio = $precio WHERE codigo = $codigo");
  }

  public function bajaProducto($codigo) {
    $this->db->query("DELETE FROM productos WHERE codigo = " . $codigo);
  }  

  public function buscarProducto($codigo) {
    return $this->db->query("SELECT * FROM productos WHERE codigo = " . $codigo);
  }
}
?>