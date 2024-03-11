// declaração de função (function hoisting) em qualquer direção antes do codigo ou depois é possivel chamar a função a executar 
falaOi();
function falaOi(){
    console.log('Oi');
}
// falaOi();

// Firt class object (objetos de primeira classe) pode tratar uma função como um dado
// é possivel tratar as funções para dados
// Function expression
// const souUmDado = function(){
//     console.log('Sou um Dado');
// };
const souUmDado = function nomeQualquer(){
    console.log('Sou um Dado');
};

// souUmDado();


function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo: ');
    funcao();
}
executaFuncao(souUmDado);

// Arrow Function 

const functionArrow = () => {
console.log('sou uma arrow function');
}
functionArrow();

// Dentro de um objeto
// const obj = {
//     falar: function(){
//         console.log('Estou falando...');
//     }
// };
// obj.falar();

// tambem é possivel fazer essa declaração de função como objeto
const obj = {
    falar (){
        console.log('Estou falando...');
    }
};
obj.falar();


