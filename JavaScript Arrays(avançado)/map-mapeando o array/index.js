// dobre os numeros 
// 

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosEmDobro = numeros.map(valor => valor*2);
// console.log(numerosEmDobro);


//para cada elemento:
// Retorne apenas uma String com nome da pessoa
// Remova apenas a chave "Nome" do Objeto 
// Adicione uma chave id em cada objeto 

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallacee', idade: 23},
];

const nomes = pessoas.map(function(valor){
    return valor.nome;
});
const idades = pessoas.map(function(valor){
    return valor.idade;
});
console.log(idades);

const comIds = pessoas.map(function(obj,indice){
    obj.id = indice;
    return obj;
})
console.log(comIds);