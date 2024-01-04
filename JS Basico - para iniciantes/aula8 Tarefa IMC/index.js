/**
 * Dionisio Samuel Dos Santos Leão tem 22 anos, pesa 87 kg;
 * tem 1.8 de altura e seu IMC é de .... 
 * Dionisio Samuel Dos Santos nasceu em 2001
 */

const nome = 'Dionisio Samuel Dos Santos';
const sobrenome = "Leão";
const idade = 22;
const peso = 87;
const alturaEmM = 1.80;
const ano = 2001;

let imc; // peso / (altura * altura)
imc = peso / (alturaEmM * alturaEmM)
let anoNascimento;
anoNascimento = 2023 - ano; 

// modo normal de exibição
// console.log(nome+ ' ' + sobrenome +' tem',anoNascimento,'anos, pesa', peso,'kg; tem',alturaEmM,'de altura e seu IMC é de',imc, nome,'nasceu em',ano);

// `` executa uma expressão dentro de uma string e o ${} chamar as variaveis dentro da crase 

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
