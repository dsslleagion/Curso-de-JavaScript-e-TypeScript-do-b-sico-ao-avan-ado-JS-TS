// IEEE 754-2008 nome das regras documentação
let num1 = 0.7;// number
let num2 = 0.1; // number
// sempre haveráimpressições para se trabalhar com numeros flutuantes em calculos
// num1 += num2; // num1 = num1 + num2;
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

// num1 = num1.toFixed(2) // não transforma em valor inteiro
// num1 = parseFloat(num1.toFixed(2));
// num1 = Number(num1.toFixed(2));
num1 = Number(num1.toFixed(2));

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));


// console.log(num1.toString() + num2); // toString converte o numero para string
// console.log(typeof num1);
//  num1 = num1.toString(); // converte definitivamente em string 

//  console.log(num1.toString(2));// transforma em string para exibir e o (2) exibe a representação binaria da variavel

// let num1 = 10.11232313123123;
// console.log(num1.toFixed(2)); // numero em ponto flutuante programado para exibir apenas 2 casas depois da virgula

// console.log(Number.isInteger(num1));// ddescobrir se o valor da variavel é do tipo inteiro 

// let temp = num1 + "5";
// console.log(Number.isNaN(temp));// sua conta deu not a number?


