/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa Noite
 * 
 * 
 * if pode ser usado sozinho 
 * sempre que utilizo a palavra else, preciso de um if antes
 * eu posso ter varios else ifs na checagem 
 * só posso ter 1 else na checagem 
 * podemos usar condições sem o else if, utiizando apenas o if e else
 */

// const hora = 55;

// // if se acontecer algo
// // else if se não acontecer algo
// if (hora >= 0 && hora <= 11){
//     console.log('Bom dia');
// } else if(hora >= 12 && hora <= 17){
//     console.log('Boa tarde');
// } else if(hora >= 18 && hora <= 23){
//     console.log('Boa noite');
// }else {
//     console.log("hora invalida");
// }

// const tenhoGrana = false;

// if (tenhoGrana){
//     console.log('vou sair de casa');
// }else{
//     console.log('não vou sair de casa');
// }

// parte 2 if else

// const numero = 10;


// if (numero >= 0 && numero <= 5 ) {
// console.log('Sim, o numero está entre o 0 e 5');
// }else{
//     console.log('o numero Não está  entre o 0 e 5');
// }

// const numero = 10;


// if (numero >= 0 && numero <= 5 ) {
// console.log('Sim, o numero está entre o 0 e 5');
// }
// console.log('O numero Não está entre 0 e 5');


// const numero = 10;

// // se (numero >= 0 && numero <= 5 ) ocorrer , faça isso {codigo}
// // se não {o codigo}

// if (numero >= 0 && numero <= 5 ) {
// console.log('Sim, o numero está entre o 0 e 5');
// }else{
//     console.log('o numero Não está  entre o 0 e 5');
// }

const numero = 10;

if (numero < 10){
    console.log('O numero é menor ou igual que 10');
}

if (numero >= 0 && numero <= 5 ) {
console.log('Sim, o numero está entre o 0 e 5');
}else if(numero >= 6 && numero <= 8) {
    console.log('o numero está entre o 6 e 8');
}else if(numero >= 9 && numero <= 11) {
    console.log('o numero está entre o 9 e 11');
}else{
    console.log('O numero não está entre 0 e 11');
}
  

console.log('.........Aqui vai o resto do codigo.');