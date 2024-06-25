//reduzir o array em um unico elemento

// some todos os numeros (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (map)
// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
// const total = numeros.reduce(function(acumulador, valor, indice, array){
// acumulador += valor;
   
// return acumulador;
// }, 0);
// console.log(total);


// pares
// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
// const total = numeros.reduce(function(acumulador, valor, indice, array){

//    if(valor % 2 === 0) acumulador.push(valor);
   
//    return acumulador;
// }, []);
// console.log(total);

// impares
// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
// const total = numeros.reduce(function(acumulador, valor, indice, array){

//    if(valor % 2 !=== 0) acumulador.push(valor);
   
//    return acumulador;
// }, []);
// console.log(total);


const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce(function(acumulador, valor){

   if(valor% 2 === 0 ) acumulador += valor;
   
   return acumulador;
},0);
// console.log(total);



//qual é a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallacee', idade: 23},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    

    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}); 

console.log(maisVelha);