<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Productos</title>
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/estilos.css">
  <script src="inicio.js" type="text/javascript"></script>
  <script src="funciones-ajax.js" type="text/javascript"></script>
</head>
<body>
  
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <h1>Ferretería "Los Amigos"</h1>
        <span>Los mejores productos al mejor precio</span>
      </div>
    </div>
  
    <div class="row">
      <div class="col-sm-12">
        <h3>Alta de producto</h3>
      </div>  
      <div class="col-sm-12">
        <form role="form" class='form-horizontal'>
          <div class="form-group">
            <label class="control-label col-sm-1" for="codigo">Código: </label>        
            <div class="col-sm-11">
              <input type="text" class="form-control ancho_15" id="codigo">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-1" for="producto">Producto: </label>        
            <div class="col-sm-11">
              <input type="text" class="form-control ancho_50" id="producto">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-1" for="descripcion">Descripción: </label>        
            <div class="col-sm-11">
              <input type="text" class="form-control ancho_75" id="descripcion">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-1" for="precio">Precio: </label>        
            <div class="col-sm-11">
              <input type="text" class="form-control ancho_15" id="precio">
            </div>
          </div>
          <div class="form-group"> 
            <div class="col-sm-offset-1 col-sm-8">
              <button type="button" class="btn btn-default" onclick="altaDatos();">Dar de alta</button>
            </div>
          </div>
        </form>                                
      </div>
    </div>   

    <div class="row">
      <div class="col-sm-12">
        <h3>Modificación de producto</h3>
      </div>  
      <div class="col-sm-12">
        <form role="form" class='form-horizontal'>
          <div class="form-group">
            <label class="control-label col-sm-1" for="codigo">Código: </label>        
            <div class="col-sm-11">
              <input type="text" class="form-control ancho_15" id="codigo_mod">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-1" for="producto">Producto: </label>        
            <div class="col-sm-11">
              <input type="text" class="form-control ancho_50" id="producto_mod">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-1" for="descripcion">Descripción: </label>        
            <div class="col-sm-11">
              <input type="text" class="form-control ancho_75" id="descripcion_mod">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-1" for="precio">Precio: </label>        
            <div class="col-sm-11">
              <input type="text" class="form-control ancho_15" id="precio_mod">
            </div>
          </div>
          <div class="form-group"> 
            <div class="col-sm-offset-1 col-sm-8">
              <button type="button" class="btn btn-default" onclick="modificarDatos();" id="boton_mod">Modificar</button>
            </div>
          </div>
        </form>                                
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-12">
            <h3>Catálogo de productos</h3>
          </div>
          <div class="col-sm-12">
            <table class="table table-condensed">
              <thead>
                <tr>
                  <th class="text-center">Código</th>
                  <th class="text-center">Producto</th>
                  <th class="text-center">Precio</th>
                  <th class="text-center">Descripción</th>
                  <th class="text-center" colspan="2">Acciones</th>              
                </tr>
              </thead>
              <tbody id="datos">
                <script type="text/javascript">mostrarDatos();</script>
              </tbody>
            </table>
          </div>          
        </div>
      </div>
    </div>  
  
  </div>

</body>
</html>