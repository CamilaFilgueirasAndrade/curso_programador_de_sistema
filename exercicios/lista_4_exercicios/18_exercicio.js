function contaVogais(palavras) {
    let contador = 0;

    for(let i=0; i < palavras.length; i++) {
        let char = palavras.charAt(i);
         
        switch(char){
            case  "a":
            case  "e":
            case  "i":
            case  "o":
            case  "u": contador++; 
        }
    }
    return contador;
}
console.log(contaVogais("Hello"));
console.log(contaVogais("Hello")===2);
console.log(contaVogais("javascript"));
console.log(contaVogais("javascript")===3);
console.log(contaVogais("aeiou"));
console.log(contaVogais("aeiou")===5);
console.log(contaVogais("yxz"));
console.log(contaVogais("yxz")===0);