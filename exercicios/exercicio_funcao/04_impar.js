function numeroIp(a) {
	let resposta;
	let resto = a % 2;

	if(resto == 1){
		resposta = "Ímpar";
	} else {
		resposta = "Par";
	}
	return resposta;
}
console.log(numeroIp(4));
console.log(numeroIp(7));
console.log(numeroIp(0));
console.log(numeroIp(-5));