function polaridade(N){
	let comparar;
if (N > 0){
	    comparar = "Positivo";
	}
	else { 
	    comparar = "Negativo";}
	
if(N == 0){
	    comparar = "Zero";
	}

    return comparar;  
}
console.log(polaridade(5)); // "positivo"
console.log(polaridade(-3)); // "Negativo"
console.log(polaridade(0)); // "Zero"
console.log(polaridade(1110)); // "positivo"
console.log(polaridade(-987654321)); // "Negativo"