/**
 * Javascript é baseado em protótipos para passar propriedades e 
 * métodos de um objeto para outro.
 * 
 * Definição de protótipo
 * Protótipo é o termo usado para se referir ao que foi
 * criado pela primeira vez, servindo de modelo ou molde para futuras produções.
 * 
 * Todos os objetos tem uma referência interna para um protótipo (_proto)
 * que vem da propriedade prototype da função construtora que foi usada para cria-lo.
 * Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar esse membro no proprio objeto e depois a cadeia
 * de protótipos é usada até o topo (null) até encontrar ( ou não) tal membro.
 */

// //Contrutora -> molde(classe)
// function Pessoa(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.nomeCompleto = () => this.nome + '' + this.sobrenome;

// }
// //instância 
// const pessoa1 = new Pessoa('Luiz', 'O.');
// const data = new Date();

// console.dir(pessoa1);
// console.dir(data);


//Contrutora -> molde(classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: '+this.nome + '' + this.sobrenome;

}

//pessoa.prototype === pessoa1._proto_

//ordem de prioridade de busca do moto do javascript
//pessoa1 --> Pessoa.prototype --> object.prototype 

//usando o prototype da função pessoa
Pessoa.prototype.nomeCompleto = function () {
 return this.nome +''+ this.sobrenome;    
}
//instância 
const pessoa1 = new Pessoa('Luiz', 'O.');
const data = new Date();

console.dir(pessoa1);
console.dir(data);
