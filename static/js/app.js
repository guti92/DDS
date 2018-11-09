$(function() {
    $('input[name="date-ingreso"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    });
    $('input[name="date-egreso"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    });
    $('input[name="date-baja"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    });
     

    $("#situacion").click(function(){
	    if($("#situacion").val() == "Suspención de Tareas"){
	    	console.log("dentro de suspencion de tareas");
	    	$('input[name="date-desde"]').attr("readonly", false);
	    	$('input[name="date-hasta"]').attr("readonly", false);

	    	$('.desde').show(); 
	      	$('.hasta').show();

	    	$('input[name="date-desde"]').daterangepicker({
	        	singleDatePicker: true,
	        	showDropdowns: true
	    	});
	      	$('input[name="date-hasta"]').daterangepicker({
	        	singleDatePicker: true,
	        	showDropdowns: true
	    	});
	    }else{
	    	console.log("dentro de otra situacion");
	    	$('input[name="date-desde"]').attr("readonly", true);
	    	$('input[name="date-hasta"]').attr("readonly", true);

	    	$('.desde').hide(); 
	      	$('.hasta').hide();
	    }
	});
});