///arrays, listas

// const alunos = ['joão', 'maria', 'jacob', 1, true, null];
// console.log(alunos);
 
//strings são indexadas "0123456"
// const nome = "Dionisio Samuel"
// console.log(nome[10]);
//arrays são indexados por elemento, item 0, item 1 e afins]
let alunos =  ['joão', 'maria', 'jacob'];
alunos = 123;

// const alunos = ['joão', 'maria', 'jacob'];


console.log(typeof alunos);// array sempre é considerado objeto
console.log(alunos instanceof Array); // pergunta se é uma instancia de array 


// alunos.push('Luiza');
// alunos.push('Eduardo');

// console.log(alunos.slice(0, -1));

// console.log(alunos.slice(0, 3));

// console.log(alunos[50]);

// delete alunos[1];
// console.log(alunos);

// //remove
// const removido = alunos.shift();
// console.log(removido);
// console.log(alunos);

//remove
// const removido = alunos.pop();
// console.log(removido);
// console.log(alunos);

//remove
// alunos.pop('tania');
// console.log(alunos);

//forma simples de add no começo do array
//  alunos.unshift('tania');
//  alunos.unshift('Fabio');
//  console.log(alunos);

// //forma simples de add
// alunos.push('tania');
// console.log(alunos);

//outra forma de editar
// alunos[alunos.length] ="Luiza";//altera
// alunos[alunos.length] ="Fabio";//adiciona, depende do contexto
// alunos[alunos.length] ="Luana";
// console.log(alunos);

// console.log(alunos.length);// tamanho do array

//editar
// alunos[0]="Eduardo";
// alunos[3]="Luiza";

// console.log(alunos);
// console.log(alunos[1]);
