function objetoAjax() {
	var xmlhttp = false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e) {
		try {
		  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(E) {
			xmlhttp = false;
  	}
	}

	if(!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}

	return xmlhttp;
}

function mostrarDatos() {
	// donde se mostrará el resultado de los productos 
	divDatos = document.getElementById('datos');
	
	// instancio el objetoAjax
	ajax = objetoAjax();
	
	// uso el metodo POST y coloco el archivo en el que realizará la operación
	ajax.open("POST", "consulta.php", true);
	ajax.onreadystatechange = function(e) {
		if(ajax.readyState == 4) {
			// muestro los resultados de la consulta en la tabla de productos
			divDatos.innerHTML = ajax.responseText;
		}		
	}
	ajax.send();	
}

function altaDatos() {
	// obtengo los valores de los campos de input del formulario
	codigo = document.getElementById('codigo').value;
	producto = document.getElementById('producto').value;
	descripcion = document.getElementById('descripcion').value;
	precio = document.getElementById('precio').value;
	
	// una variable para comprobar errores de validación: si errores fuese 'true', hay errores de validación y no se permite el alta
	// la variable mensaje contiene un mensaje que se imprimirá en caso de que haya errores de validación
	var errores = false;
	var mensaje = '--- Formulario de alta ---\nSe han producido los siguientes errores:\n';

	var soloNumerosEnteros = new RegExp("^[0-9]+$");
	var res = soloNumerosEnteros.test(codigo);
	if(codigo == '' || res == false) {
		errores = true;
		mensaje = mensaje + '- El campo código no puede permanecer vacío y sólo debe contener números enteros.\n';
	}

	if(producto == '') {
		errores = true;
		mensaje = mensaje + '- El campo producto no puede permanecer vacío.\n';
	}

	if(descripcion == '') {
		errores = true;
		mensaje = mensaje + '- El campo descripción no puede permanecer vacío.\n';		
	}

	var noEsNumero = isNaN(precio);
	if(precio == '' || noEsNumero == true) {
		errores = true;
		mensaje = mensaje + '- El campo precio no puede permanecer vacío y sólo debe contener números enteros o decimales.\n';		
	} 

	if(errores == true) {
		alert(mensaje);
	}
	else {
		// instancio el objetoAjax
		ajax = objetoAjax();
		
		// uso el metodo POST y coloco el archivo en el que se realizará la operación
		ajax.open("POST", "alta.php", true);
		ajax.onreadystatechange = function(e) {
			if(ajax.readyState == 4) {
				// vacío los campos del formulario
				document.getElementById('codigo').value = '';
				document.getElementById('producto').value = '';
				document.getElementById('descripcion').value = '';
				document.getElementById('precio').value = '';

				// actualizo el listado de productos para mostrar el ultimo insertado
				mostrarDatos();
			}			
		};
		
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		// envio los valores
		ajax.send("codigo="+codigo+"&producto="+producto+"&descripcion="+descripcion+"&precio="+precio);
	}
}

function borradoDatos(codigo) {
	// instancio el objetoAjax
	ajax = objetoAjax();
	
	// uso el metodo POST y coloco el archivo en el que se realizará la operación
	ajax.open("POST", "baja.php", true);
	ajax.onreadystatechange = function(e) {
		if(ajax.readyState == 4) {
			// actualizo el listado de productos para que desaparezca aquel que ha sido dado de baja
			mostrarDatos();
		}		
	}
	
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	// envio los valores
	ajax.send("codigo="+codigo);
}

function cargarDatos(codigo) {
  // habilito los campos de texto necesarios para la modificación del producto
  document.getElementById('producto_mod').disabled = false;
  document.getElementById('descripcion_mod').disabled = false;
  document.getElementById('precio_mod').disabled = false;	
  document.getElementById('boton_mod').disabled = false;

	// instancio el objetoAjax
	ajax = objetoAjax();
	
	// uso el metodo POST y coloco el archivo en el que se realizará la operación
	ajax.open("POST", "obtener_producto.php", true);
	ajax.onreadystatechange = function(e) {
		if(ajax.readyState == 4) {
			// obtengo el JSON enviado por PHP
			var obj = ajax.responseText;
			JSONProducto = JSON.parse(obj);

			// vacío los campos del formulario
			document.getElementById('codigo_mod').value = JSONProducto.codigo;
			document.getElementById('producto_mod').value = JSONProducto.producto;
			document.getElementById('descripcion_mod').value = JSONProducto.descripcion;
			document.getElementById('precio_mod').value = JSONProducto.precio;

			// actualizo el listado de productos para mostrar el ultimo insertado
			mostrarDatos();
		}		
	}
	
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	// envio los valores
	ajax.send("codigo="+codigo);
}

function modificarDatos() {
	// obtengo los valores de los campos de input del formulario
	codigo_mod = document.getElementById('codigo_mod').value;
	producto_mod = document.getElementById('producto_mod').value;
	descripcion_mod = document.getElementById('descripcion_mod').value;
	precio_mod = document.getElementById('precio_mod').value;

	// una variable para comprobar errores de validación: si errores fuese 'true', hay errores de validación y no se permite el alta
	// la variable mensaje contiene un mensaje que se imprimirá en caso de que haya errores de validación
	var errores = false;
	var mensaje = '--- Formulario de modificación ---\nSe han producido los siguientes errores:\n';

	if(producto_mod == '') {
		errores = true;
		mensaje = mensaje + '- El campo producto no puede permanecer vacío.\n';
	}

	if(descripcion_mod == '') {
		errores = true;
		mensaje = mensaje + '- El campo descripción no puede permanecer vacío.\n';		
	}

	var noEsNumero = isNaN(precio_mod);
	if(precio_mod == '' || noEsNumero == true) {
		errores = true;
		mensaje = mensaje + '- El campo precio no puede permanecer vacío y sólo debe contener números enteros o decimales.\n';		
	}
	
	if(errores == true) {
		alert(mensaje);
	}
	else {	
		// instancio el objetoAjax
		ajax = objetoAjax();
		
		// uso el metodo POST y coloco el archivo en el que se realizará la operación
		ajax.open("POST", "modificar.php", true);
		ajax.onreadystatechange = function(e) {
			if(ajax.readyState == 4) {
				// vacío los campos del formulario y los desactivo
				document.getElementById('codigo_mod').value = '';
				document.getElementById('producto_mod').value = '';
				document.getElementById('producto_mod').disabled = true;
				document.getElementById('descripcion_mod').value = '';
				document.getElementById('descripcion_mod').disabled = true;
				document.getElementById('precio_mod').value = '';
				document.getElementById('precio_mod').disabled = true;
				document.getElementById('boton_mod').disabled = true;			

				// actualizo el listado de productos
				mostrarDatos();				
			}			
		}
		
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		// envio los valores
		ajax.send("codigo="+codigo_mod+"&producto="+producto_mod+"&descripcion="+descripcion_mod+"&precio="+precio_mod);
	}	
}