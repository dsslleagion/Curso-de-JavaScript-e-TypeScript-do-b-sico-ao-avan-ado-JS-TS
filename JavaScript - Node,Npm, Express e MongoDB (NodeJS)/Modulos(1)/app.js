//importação 

// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

//como importar executando função
// const mod1 = require('./mod1').falaNome;
// console.log(falaNome());

//pegar o module e a chave

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());


// pegar fazendo desestruturação

// const {nome, sobrenome, falaNome} = require('.mod1');
// console.log(nome,sobrenome);
// console.log(falaNome());


class Pessoa{
    constructor(nome){
        this.nome= nome;
    }
}

exports.Pessoa = Pessoa;



//revisão

// module.exports.nome = 'Dionisio';
// exports.Pessoa = Pessoa;
// this.sobrenome = 'Qualquer coisa que eu quiser'


//sobreescrevendo a exportação

const nome = 'Dionisio';
const sobrenome = 'Samuel';

module.exports = {
    nome, sobrenome, Pessoa
};

//exports
exports.outraCoisa = 'OutraCoisa';