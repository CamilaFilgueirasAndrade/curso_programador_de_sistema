function divisao(a,b){
			//Declaraçaõ de variáveis auxiliares
			var resultado
			var resto
			//Processamento de dados
			resto = a % b;
			resultado = (a- resto) / b;

			return resultado;
		}
		console.log(divisao(10,3));
		console.log(divisao(9,3));
		console.log(divisao(7,5));
		console.log(divisao(0,5));
		console.log(divisao(9,2));