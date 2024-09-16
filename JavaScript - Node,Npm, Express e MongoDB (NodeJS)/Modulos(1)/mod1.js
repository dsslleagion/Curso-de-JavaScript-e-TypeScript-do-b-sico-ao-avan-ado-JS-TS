/**
 * module é um recurso que exporta modulos que
 * já é nativa do node 
 */
const nome = 'Dionisio';
const sobrenome = 'Miranda';

// const falaNome = () => {
//     console.log(nome, sobrenome);
    
// };

const falaNome = () => nome + " " + sobrenome;


// console.log(module);

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.falaNome = falaNome; // apenas exporta e não executa 
// console.log(module.exports);


//abreviação e atalho para fazer a mesma coisa 


// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// console.log(exports);


//se caso queira mudar o nome da variavel de exportação  eu posso 
//exports.NOME=nome;


exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(exports);


const {Pessoa} = require('./mod1');

// const p1 = new Pessoa('Dionisio');
// console.log(p1);


// como chamar um modulo que ja possui no node

const path = require('path');
const axios = require('axios');




axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e));


const teste = require('./app');


const p1 = new Pessoa('jão');
console.log(p1);
console.log(mod1);
