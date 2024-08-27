function calculandoMedia(M) {
	let resposta;
	if(M>=7.0){
		resposta = "Aprovado"
	} else {
		resposta = "Reprovado"
	}
 return resposta;
 }
	
console.log(calculandoMedia(10));
console.log(calculandoMedia(7.0));
console.log(calculandoMedia(6.95));
console.log(calculandoMedia(8.8));
console.log(calculandoMedia(0));
console.log(calculandoMedia(2.725));