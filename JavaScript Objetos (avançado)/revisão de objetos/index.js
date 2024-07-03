// literal de String literal "" '' ´´
//objeto literal {}
// numero literal 191203


//corpo do objeto
// const pessoa = {

// };

// cada item do objeto 
//ex: nome, sobrenome é uma "chave"
//  const pessoa = {
//     nome: 'Dionisio',
//     sobrenome: 'Samuel'

//  };

//  console.log(pessoa.nome);
//  console.log(pessoa.sobrenome);

// outra forma de acessar da mesma forma
//  console.log(pessoa['nome']);
//  console.log(pessoa['sobrenome']);

// const chave = 'nome';
// console.log(pessoa[chave]);

// construtor de objeto 

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

//literal construtor
// const pessoa2 = {
//     nome: 'Dionisio',
//     sobrenome: 'Samuel'
// };

// console.log(pessoa1, pessoa2);


// //apagar o registro no objeto

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';

// delete pessoa1.nome;
// console.log(pessoa1);

//metodo atrelado a objeto

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 23;
// pessoa1.falarNome = function () {
//     return `${this.nome} está falando seu nome`;
// };
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1){
//     console.log(chave);
// }

//funções dentro de objeto são chamadas de metodos
// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }


// utização do molde para usar o objeto

// Factory functions / Constructor functions / classes
// syntax sugar

// //exemplo de função fabrica
// function criarPessoa (nome, sobrenome){
//     return {
//         nome, 
//         sobrenome,
//         nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criarPessoa('Dionisio','Samuel');
// console.log(p1.nomeCompleto());


// constructor function

// construtor e sempre o responsaavel por criar o objeto
// function Pessoa (nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;

// // return representa um objeto vazio; // {}
// }
// palavra new cria um objeto vazio {} e tambem pegar a palavra this
// então this cria e atrela o objeto e cria um registro no objeto 
// const p1 = new Pessoa('Dionisio', 'Miranda'); 
// const p2 = new Pessoa('Luiz', 'Otavio');
// console.log(p1);

// const p2 = {};
// p2.nome = 'Luiz';



// p1 = (ENDEREÇODEMEMORIA) -> 'valor'
// p1.ENDERECOMEMORIA = {nome: 'Outra coisa'}
// p1 = (NOVOENDERECOMEMo....)
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //impedi de fazer alterações
    // Object.freeze(this); 
}
const p1 = new Pessoa('Dionisio', 'Miranda');
//como não deve fazer a alteração do valor de memoria
// p1 = 'Outra coisa\ 
//Como fazer modificação de maneira correta
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria','Miranda');

console.log(p1);
console.log(p2);

// não é possivel criar coisas no objeto ja criado apenas manipular