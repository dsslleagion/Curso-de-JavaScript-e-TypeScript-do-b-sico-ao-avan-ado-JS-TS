// diferença de valores primitivos e valores por rerencia 

/*
Primitivos (valores imutaveis)(os valores são copiados) - string, number,
 boolean, undefined, null e (bigint, symbol)

 Referência (mutável)(os valores são apontados na memoria ao mesmo lugar) - array, object, function
*/
// strings tem indices 1234
// strings são imutavel, no caso valor
// let nome;
// nome = 'luiz';
// nome [0]= 'R';
// console.log(nome[0], nome);


// let a = 'a';
// let b = a; // copia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

// valores passados por referencia é geralmente mutavel 

// let a  = [1,2,3]; // apontamento de memoria ao mesmo lugar
// let b = a; // apontamento de memoria ao mesmo lugar
// let c = b;
// console.log(a , b);
// a.push(4);
// console.log(a, b);
// b.pop();
// console.log(a, b);
// a.push('luiz')
// console.log(c);

// let a  = [1,2,3]; // apontamento de memoria ao mesmo lugar
// let b = [...a]; //valor de a foi copiado pro b
// let c = b;
// console.log(a , b);
// a.push(4);
// console.log(a, b);
// b.pop();
// console.log(a, b);
// a.push('luiz')
// console.log(a, c);


// const a = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio'
// };
// const b = a; // b aponta para o mesmo local de memoria de a
// a.nome = 'João'
// console.log(b);

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const b = {...a}; // b copia o valor a
a.nome = 'João';
console.log(a);
console.log(b);




