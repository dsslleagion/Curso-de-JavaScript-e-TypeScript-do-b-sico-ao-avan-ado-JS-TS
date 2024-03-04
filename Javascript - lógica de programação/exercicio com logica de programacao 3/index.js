// Escreva uma função que recebe um numero e 
//retorne o seguinte:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero Não é divisivel por 3 e 5 = Retorna o proprio 
// checar se o numero é realmente um numero
// USe uma função com numeros de 0 a 100

// function check_num(x) {
//     if (x % 3  === 0 ){
//         console.log(`Fizz`);
//     }else if(x % 5 == 0){ 
//         console.log(`Buzz`);
//     }else if (x % 3  === 0 && x % 5 === 0 ){
//         console.log(`FizzBuzz`);
//     }else if (x % 3  !== 0 && x % 5 !== 0 ){
//         console.log(`${x}`);
//     }else if (x === 'Number' && !isNaN(valor)){
//         console.log(`é numero`);
//     }
// }


function checkNum(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizBuzz';
    return numero;

}

for(let i = 0; i < 100; i++){
    console.log(i, checkNum(i));
}
