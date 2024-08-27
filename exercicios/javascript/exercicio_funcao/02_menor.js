function obtemMenor(a, b, c){
	let menor;
	if (a < b){
		menor = a;
	} else {
		menor = b;
	}
    if(c < menor)
    menor = c;

    return menor;  
}
console.log(obtemMenor(3, 7, 5));
console.log(obtemMenor(-1, -3, -5));
console.log(obtemMenor(8, 2, 10));

