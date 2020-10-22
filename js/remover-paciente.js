var pacientes = document.querySelectorAll(".paciente");


    //pacientes.forEach(function function_name(paciente) {
    	
    	//paciente.addEventListener("dblclick",function(){
    		
    		//console.log("fui clicado");
    	//});
   // });

   const tabela = document.querySelector("table");
   tabela.addEventListener("dblclick",function(event){
    	
        //var alvoEvento = event.target;
       // var paiDoAlvo = alvoEvento.parentNode;
        //paiDoAlvo.remove();

    	event.target.parentNode.classList.add("fadeout");

    	setTimeout(function(){

    		event.target.parentNode.remove();
    	} , 500);
    	

    	});