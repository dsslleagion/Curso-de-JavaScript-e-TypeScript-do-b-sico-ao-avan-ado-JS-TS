// Operadores aritméticos,incremento e atribuição

/* Aritméticos 
+ Soma / Concatenação 
- Subtração
/ Divisão
* Multiplicação
** potenciação
%  Resto da divisão

ordem de procedencia:
() = primerio
** = segundo
* / % = terceiro 
+ - = quarto 

Operadores de Atribuição
**= 
+=
-=
/=


parseFloat = converte string para numero flutuante
parseInt = converte string para numero inteiro
Number = converte para string para numero inteiro ou flutuante.
*/

// adição 
// const num1 = 5;
// const num2 = 10;
// console.log(num1 + num2);

// concatenação (união de dois valores)
// const num1 = '5';
// const num2 = 10;
// console.log(num1 + num2);

// subtração
// const num1 = 5;
// const num2 = 10;
// console.log(num1 - num2);

// divisão
// const num1 = 5;
// const num2 = 10;
// console.log(num1 / num2);

// multiplicação
// const num1 = 5;
// const num2 = 10;
// console.log(num1 * num2);

// Potenciação
// const num1 = 2;
// const num2 = 10;
// console.log(num1 ** num2);

// Resto da divisão 
// const num1 = 10;
// const num2 = 3;
// console.log(num1 % num2);

// varios valores para calcular
// const num1 = 5;
// const num2 = 2;
// const num3 = 10;
// // console.log(num1 + num2 + num2 + num1 * num3);
// // igual em matematica há  operadores que são iniciados primeiro do que outros por conta da procedencia 
// console.log((num1 + num2) * num3); // com parenteses é possivel organizar a ordem da conta 


// const num1 = 5;
// const num2 = 2;
// const num3 = 10;
// // console.log(num1 + num2 + num2 + num1 * num3);
// // igual em matematica há  operadores que são iniciados primeiro do que outros por conta da procedencia 
// console.log(num1 * num2 / num3); // com parenteses é possivel organizar a ordem da conta 

// operador de incremento ++ 
// incrementa a variavel e incrementa valor nela
// Pós 
// let contador = 1;
// contador ++; // valor da variavel + 1 = 2
// contador ++; // = 3
// contador ++; // = 4
// contador ++; // = 5
// console.log(contador);
// NUNCA UTILIZAR CONST COM O ++

// Pré 
// let contador = 1;
// ++contador; // valor da variavel + 1 = 2
// ++contador; // = 3
// ++contador; // = 4
// ++contador; // = 5
// console.log(contador);
// NUNCA UTILIZAR CONST COM O ++

// pré = primeiro faz a conta e depois exibe o valor
// pós = executa a ação primeiro e depois incrementa o valor 

// let contador = 1;
// console.log(contador++); //ele ja fez a soma do 1 porém não é exibido, porque primeiro ele exibiu o valor e depois somou

// let contador = 1;
// console.log(contador++);
// console.log(contador);

// let contador = 1;
// console.log(++contador); // primeiro somou o valor e depois foi incrementado e exibiu o valor

// let contador = 1;
// console.log(++contador); // primeiro somou o valor e depois foi incrementado e exibiu o valor
// console.log(contador);

// Operador de decremento 
// let contador = 10;
// console.log(--contador); // subtrai valores na mesma regra do Pré incremento mas no caso é pré decremento
// console.log(contador);

// let contador = 10;
// console.log(contador--); // subtrai valores na mesma regra do Pós incremento mas no caso é pós decremento
// console.log(contador);

// Incremento = ++ 
// Decremento = --
// modos de uso = Pós e Pré

// let contador = 1;
// contador++;
// console.log(contador);

// incremento de mais de 1 valor
// const passo = 50;
// let contador = 0;

// contador = contador + passo;
// console.log(contador); // 2
// contador = contador + passo;
// console.log(contador); // 4
// contador = contador + passo;
// console.log(contador); // 6

// ou

// let contador = 0;
// contador += 2; //contador = contador + 2
// contador += 2;
// contador += 2;
// console.log(contador);

// let contador = 2;
// contador **= 10; //contador = contador * 2
// console.log(contador);

// const num1 = 10;
// const num2 = 'Sam';
// console.log(num1 * num2);
// resultado = NaN 
// NaN - Not a Number 

// const num1 = 10;
// const num2 = '5'; // BUG, o java analisou que a string era um numero e resolveu
// console.log(num1 * num2);

// const num1 = 10;
// const num2 = parseInt('5'); // converte string para inteiro com parseInt
// console.log(num1 * num2);

// const num1 = 10;
// const num2 = parseFloat('5.2'); // converte string para flutuante com Float
// console.log(num1 * num2);

// const num1 = 10;
// const num2 = Number('5.2'); // converte string para flutuante ou Inteiro com Number
// console.log(num1 * num2);



