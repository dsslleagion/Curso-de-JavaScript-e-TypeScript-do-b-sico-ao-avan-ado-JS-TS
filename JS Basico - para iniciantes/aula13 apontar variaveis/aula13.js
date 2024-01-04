// Exercicio : apontar as variaveis com essas variaveis
// let varA = 'A'; // B
// let varB = 'B'; // C
// let varC = 'C'; // A

// // não é valido 
// // let varA = 'B'; // B
// // let varB = 'C'; // C
// // let varC = 'A'; // A

// // valido
// // varA = varB;
// // varB = varC;
// // varC = varA;

// console.log(varA, varB, varC);

// //Resposta

// let varA = 'A';
// let varB = 'B';
// let varC = 'C';

// // Use variaveis temporárias para armazenar os valores originais

// let tempA = varA;
// let tempB = varB;
// let tempC = varC;

// // atribuir os novos valores ás variaveis originais 
// varA = tempB;// Agora varA contém 'B'
// varB = tempC;// Agora varB contém 'C'
// varC = tempA;// Agora varC contém 'A'

// console.log(`varA: ${varA}, varB:${varB}, varC:${varC}`);

// outro modo 

let varA = 'A';
let varB = 'B';
let varC = 'C';

// Use variaveis temporárias para armazenar os valores originais

[varA, varB,varC] = [varB,varC,varA]

console.log(`varA: ${varA}, varB:${varB}, varC:${varC}`);