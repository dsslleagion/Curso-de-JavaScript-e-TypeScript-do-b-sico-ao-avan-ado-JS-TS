// Revisão Regras do Javascript  Constantes 
// Não podemos criar Constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// não pode começar o nomes de uma Constantes com um numero 
// não podem conter espaços ou traços
// Case-Sensitive 
// Não podemos modificar um valor de uma Constantes 
// NÃO UTILIZE VAR, UTILIZE CONST.

// const nome = 'João';
// console.log(nome);

// const nome; não se pode declarar a inicialização de uma constante 

// const nome = 'João'; não se pode modificar o valor de uma constante
// nome = 'Otávio ';

// String = text | Number = Numero
const primeiroNumero = 5; // number
const primeiroNumeroString = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

// console.log(typeof primeiroNumero); // com o typeoff descubro qual é o tipo de dado
// console.log(primeiroNumero + segundoNumero); soma
// console.log(primeiroNumeroString + segundoNumero); concatenação
// console.log( typeoff (primeiroNumeroString + segundoNumero));
// a atribuição de + tem duas funções no javascript se o tipo de dado que for trabalhado for numero havera um 
//calculo aritmético de soma caso seja string haverá concatenação 

// operadores aritiméticos 
// + - * /
