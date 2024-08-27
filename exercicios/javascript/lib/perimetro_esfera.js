function perimetro (a){
var volume = 4*3.14159*(a**3)/3;
var volumeA = volume.toFixed(4);
return volumeA;

}
        console.log(perimetro(3));
	console.log(perimetro(5));
	console.log(perimetro(1.5));