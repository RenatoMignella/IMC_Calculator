 var titulo= document.querySelector (".title");
	   titulo.textContent = "Mig Nutrition";

	var pacientes = document.querySelectorAll(".paciente");//chamar classe
	    
	
    for (var i = 0; i < pacientes.length; i++){//loop que todos o pacientes da classe
	  var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;//pega o conteudo de peso 

	var tdAltura = paciente.querySelector(".info-altura");//pega dentro do promeiro paceinte a altura
    var altura = tdAltura.textContent;//pega o conteudo da altura da classe .info-altura


	console.log(paciente);//tr
	console.log(tdPeso);//td que tem o pese 
	console.log(peso);//obter 100
	console.log(altura);

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEverdadeiro = validaPeso(peso); 
	var alturaEverdadeiro = validaAltura (altura); 
	
	if (!pesoEverdadeiro){//  ||=ou
		console.log("Peso invalido");
		pesoEverdadeiro = false;//torna o peso falso 
		tdImc.textContent = "Peso invalido";// se o peso é falso mostra no campo de imc Peso invalido
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEverdadeiro) {
		console.log("altura invalida")
		alturaEverdadeiro = false;
		tdImc.textContent = "Altura invalida";
		paciente.classList.add("paciente-invalido");
	}
	
	if ( pesoEverdadeiro && alturaEverdadeiro )  {
		var imc = calculaImc (peso,altura);
		tdImc.textContent = imc; // coloca o calculo no campo do IMC no html 	
	}  
	  
}

function validaPeso(peso) {
     if (peso >= 0 && peso < 1000) {
     	return true;
     } else {
     	return false;
     }
}


function validaAltura(altura) {
	if (altura >= 0 && altura <= 3.00) {
		return true;
	} else {
		return false;
	}
}



function calculaImc(peso,altura) {
    var imc= 0;
    imc = peso / (altura * altura);
    
    
    
    return imc.toFixed(2);
}
 //Funcao nomeada 
//titulo.addEventListener("click",MostraAlerta);	
	
//function MostraAlerta() {
//	alert ("Dolly guarana o Melhor !");
//}

// funcao aninima

titulo.addEventListener ("click",function(){
     alert ("jacare na bunda sua ?!!");

});













  
