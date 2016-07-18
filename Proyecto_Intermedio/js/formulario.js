
$(document).on("ready",enviar); 

function enviar () {
	$("#envio").on("click", mostrarOrden);
}

function mostrarOrden(){
	nombre=$("#nombre").val();
	mesa=$("#mesa").val();
	personas=$("#personas").val();
	nota=$("#nota").val();
	no_ordrojo=$('#no_ordrojo').val();
	no_ordnat=$('#no_ordnat').val();
	no_ordexp=$('#no_ordexp').val();
	no_indrojo=$('#no_indrojo').val();
	no_indnat=$('#no_indnat').val();
	no_indexp=$('#no_indexp').val();
	var total=0;

	console.log(nombre);
	console.log(mesa);
	console.log(personas);
	console.log(nota);
	console.log(no_ordrojo);
	console.log(no_ordnat);
	console.log(no_ordexp);
	console.log(no_indrojo);
	console.log(no_indnat);
	console.log(no_indexp);

	$('.orden').hide();
	
	agregar_ord="Tu orden<br>Nombre: "+nombre+"<br>Número de mesa: "+mesa+"<br>Número de personas: "+personas;
	console.log(agregar_ord);
	
	$('#agrega').append(agregar_ord);

	$('#agrega').append("<br><br>Notas:<br>"+nota);

	$('#agrega').append("<br><br><br>Cuenta:");
	
	if(($("#ordenrojo").is(':checked'))&&(no_ordrojo>0)){
		tot_ordrojo= no_ordrojo*27;
		$('#agrega').append("<br>"+no_ordrojo+" Orden(es) de pastor rojo  =  $"+tot_ordrojo);
		total=total+tot_ordrojo;
	}
	
	if(($("#ordennat").is(':checked'))&&(no_ordnat>0)){
		tot_ordnat= no_ordnat*24;
		$('#agrega').append("<br>"+no_ordnat+" Orden(es) de pastor natural  =  $"+tot_ordnat);
		total=total+tot_ordnat
	}

	if(($("#ordenexp").is(':checked'))&&(no_ordexp>0)){
		tot_ordexp= no_ordexp*30;
		$('#agrega').append("<br>"+no_ordexp+" Orden(es) de pastor extra picante  =  $"+tot_ordexp);
		total=total+tot_ordexp;
	}

	if(($("#indrojo").is(':checked'))&&(no_indrojo>0)){
		tot_indrojo= no_indrojo*4.50;
		$('#agrega').append("<br>"+no_indrojo+" Taco(s) de pastor rojo  =  $"+tot_indrojo);
		total=total+tot_indrojo;
	}

	if(($("#indnat").is(':checked'))&&(no_indnat>0)){
		tot_indnat= no_indnat*4;
		$('#agrega').append("<br>"+no_indnat+" Taco(s) de pastor natural  =  $"+tot_indnat);
		total=total+tot_indnat;
	}

	if(($("#indexp").is(':checked'))&&(no_indexp>0)){
		tot_indexp= no_indexp*4.50;
		$('#agrega').append("<br>"+no_indexp+" Taco(s) de pastor extra picante  =  $"+tot_indexp);
		total=total+tot_indexp;
	}

	console.log(total);
	$('#agrega').append("<br><br>Total a pagar  =  $"+total)

}