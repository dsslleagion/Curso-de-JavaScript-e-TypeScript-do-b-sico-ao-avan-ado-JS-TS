/*
Operadores de comparação
> maior que
>= maior que ou igual a
<= menor que ou igual a
== igualdade (valor) *NUNCA USAR*
=== igualdade estrita (valor e tipo)
!= diferente (valor) *NUNCA USAR*
!== diferente estrito (valor e tipo)
*/

// // esse numero é maior que 5?
// const comp = 10 > 5;
// console.log(comp);

// // esse numero é maior ou igual a 10?
// const comp = 10 >= 10;
// console.log(comp);

// // 10 é menor do que onze?
// const comp = 10 < 11;
// console.log(comp);

// // 10 é menor ou igual do que onze?
// const num1 = 10;
// const num2 = 11;
// const comp = num1 <= num2;
// console.log(comp);

//num1 é igual a num2?
// nunca utilizar o compadador "==" porque se caso houver 
// comparação com um number e string ele sempre retornará
// true , com conversão de tipo 
// const num1 = 10; //number
// const num2 = '10'; // string
// const comp = num1 == num2;
// console.log(comp);

// com o comparador estrito de igualdade "===" ele 
// retorná como false a comparação num e string
// sempre para igualdade utilizar "==="
// const num1 = 10; //number
// const num2 = '10'; // string
// const comp = num1 === num2;
// console.log(comp);


//diferente != acontece a mesma coisa com esse operador
// de comparação se n for de modo estrito, neste caso ,
// o valor string e number comparados são realmente diferentes
// porem o javascript dirá que não são7
// nunca utilizar
// const num1 = 10; //number
// const num2 = '10'; // string
// const comp = num1 != num2;
// console.log(comp);

// operador comparativo diferente estrito "!==" funcionará de
// de maneira mais desejada
const num1 = 10; //number
const num2 = '10'; // string
const comp = num1 !== num2;
console.log(comp);