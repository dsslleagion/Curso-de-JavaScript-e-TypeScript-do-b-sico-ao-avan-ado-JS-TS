// objeto sempre utiliza chaves
const pessoa = {
 nome: 'Dionisio',
 sobrenome:'Samuel',
 idade:30,
 //objeto dentro de objeto é normal
 endereco:{
    rua: 'Av Brsil',
    numero:320

 }
};

// const nome = pessoa.nome; //pegando um valor e colocando em variavel
//agora atribuicao via desconstrucao
// const { nome,sobrenome, idade } = pessoa;
// console.log(nome , sobrenome);

// const { nome = '',sobrenome, idade } = pessoa;
// console.log(nome , sobrenome);

//modificando o valor
// const { nome: n = '',sobrenome, idade } = pessoa;
// console.log(n , sobrenome);

// const {endereco: {rua, numero}, endereco } = pessoa;
// console.log(rua, numero,  endereco);

// const {endereco: {rua: r=12345, numero}, endereco } = pessoa;
// console.log(r, numero,  endereco);

const { nome, ...resto } = pessoa;
console.log(resto);