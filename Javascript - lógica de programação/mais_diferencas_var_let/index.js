// primeira diferença
// // var e let criam variaveis 
// let nome = 'Dionisio';
// var nome2 = 'Dionisio';


// // com let não é possivel reescrever o conteudo da variavel
// //let nome = 'Carlos';
// // com o var é possivel
// var nome2 = 'Samuel';

//segunda
// let tem escopo de bloco { ... Bloco }
// var só tem escopo de função
// const verdadeira  = true;

// let nome = 'Dionisio'; // criando
// var nome2 = 'Dionisio';
// // escopo de bloco global sem {} 
// if (verdadeira){
//     let nome = 'Samuel';// criando a variavel no bloco
//     console.log(nome, nome2);// usando apenas a variavel nome do bloco if
// // bloco do if 
//     if (verdadeira){
//         let nome = 'Outra coida'
//         console.log(nome, nome2); 
//         // bloco aninhado dentro de outro bloco
//     }
// }
// se caso a variavel nome não for encontrada em um bloco, 
// o motor do javascript parte para o proximo bloco maior, e
// se não tiver no bloco maior ela passa a buscar no bloco, 
// global e se caso não existir no bloco global é porque, 
// realmente não existe a variavel 

// agora com o uso do var

// const verdadeira  = true;

// let nome = 'Dionisio'; // criando
// var nome2 = 'Dionisio'; // criando


// // escopo de bloco global sem {} 
// if (verdadeira){
//     let nome = 'Samuel';// criando a variavel no bloco
//     var nome2 = 'Samuel2';// redeclarada
//     console.log(nome, nome2); // usando apenas a variavel nome do bloco if
// // bloco do if 
//     if (verdadeira){
//         var nome2 = 'Samuel';// 
//         let nome = 'Outra coida'
//         console.log(nome, nome2); 
//         // bloco aninhado dentro de outro bloco
//     }
// }
// console.log(nome, nome2); // nome ta usando a do bloco global e o 
// nome2 está sendo usado em todos os blocos sendo redeclarado e pego o ultimo valor
// redeclarado do var 


// var sobrenome = 'Samuel';

// function falaOi() {
//     console.log(sobrenome);
 
// }

// falaOi();



// terceiro

// var sobrenome = 'Samuel';
// console.log(sobrenome);


console.log(sobrenome);
let sobrenome = 'Samuel';


