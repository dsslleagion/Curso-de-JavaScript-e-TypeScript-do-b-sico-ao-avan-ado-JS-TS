// console.log("Linha 0")
// console.log("Linha 1");
// console.log("Linha 2");
// console.log("Linha 3");
// console.log("Linha 4");
// console.log("Linha 5");

//bloco do for não tem ";" no final
// criar uma variavel dentro do (), e criar uma condição que vai para o laço
// e vai precisa incrementa e decrementa a variavel de controle
// variavel de controle "let i"
// depois inicializa la com o valor 0
// e como precisa de 3 expressões dentro dos parenteses deve 
// se utilizar ";" para
// depois segunda condição que indicara quando esse for  vai parar
// "i <= 5" com quero chegar ao 5 eu pergunto se i é menor ou igual a 5
//depois na ultima condição do for coloco o incremento ou o decremento no meu for

// i = index
// for (let i = 0; i <= 50; i++) {
//     console.log(`Linha ${i}` );
// }
// // começou a partir do 30
// for (let i = 30; i <= 50; i++) {
//     console.log(`Linha ${i}` );
// }
// conta de 10 em 10
// for (let i = 0; i <= 50; i += 10) {
//     console.log(`Linha ${i}` );
// }
// conta do negativo tambem 
// for (let i = -10; i <= 50; i += 10) {
//     console.log(`Linha ${i}` );
// }
//inversão decrementando e colocando >=
// for (let i = 500; i >= 400; i -= 10) {
//     console.log(`Linha ${i}` );
// }
// checa se é impar ou par 
// for (let i = 0; i <= 10; i ++) {
//     const par = i % 2 === 0;
//     console.log(i , par);
// }
// estrutura ternaria
// for (let i = 0; i <= 10; i ++) {
//     const par = i % 2 === 0 ? 'par' : 'impar';
//     console.log(i , par);
// }
// classico 

const frutas = ['Maça', 'Pêra', 'Uva'];

// console.log(frutas.length);

for (let i = 0; i < frutas.length; i ++) {
   console.log(`Indice ${i}`, frutas[i]); 
 }