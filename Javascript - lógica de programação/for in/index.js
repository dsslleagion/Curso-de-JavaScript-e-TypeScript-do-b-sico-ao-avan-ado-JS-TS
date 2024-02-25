const frutas = ['Pera', 'Maça', 'Uva']; // array de 1 dimensão vetor ou seja não tem um array dentro de outro array

// iterar
// for (let i = 0; i < frutas.length; i++ ){
//     console.log(frutas[i]);
// }

//contador de indices
// for (let i in frutas ){
//     console.log(i);
// }

//for in lê indices ou chaves do objeto
// for (let indices in frutas ){
//     console.log(frutas[indices]);
// }

// for (let indices in frutas ){
//     console.log(frutas[indices]);
// }

const pessoa = {
    nome:'Dionisio',
    sobrenome: "Samuel",
    idade: 23
};

for (let i in pessoa){
    console.log(pessoa[i]);
}

for (let i in pessoa){
    console.log(i, pessoa[i]);
}


// for (let i in pessoa){
//     console.log(i);
// }

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// const chave = 'nome';
// console.log(pessoa['nome']);



