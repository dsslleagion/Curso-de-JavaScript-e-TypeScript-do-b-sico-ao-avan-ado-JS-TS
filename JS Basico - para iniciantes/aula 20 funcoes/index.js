// funções 

// function saudacao(){

//     console.log('Bom dia!');
// }

// saudacao();//chama a função para a execução

// function saudacao(nome){

//     console.log(`Bom Dia ${nome}!`);
// }

// saudacao('Dionsio');//chama a função para a execução
// saudacao('Maria'); // reutilizando a função
// saudacao('Carlos');

// function saudacao(nome){
//     return `Bom Dia ${nome}!`;
// }

// const variavel = saudacao('Dionsio');//chama a função para a execução
// console.log(variavel);

// function soma (x,y){
//     const resultado = x + y;
//     return resultado;
// }

// console.log(soma(2,2));

// function soma (x,y){
//     const resultado = x + y;
//     return resultado;
// }

// console.log(soma(2,2));
// console.log(soma(3,1));
// console.log(soma(5,10));


// function soma (x,y){
//     const resultado = x + y;
//     return resultado;
// }

// const resultado = soma(2, 2);
// console.log(resultado); 

// console.log(soma(2,2));
// console.log(resultado); // não funciona pq esta protegido dentro da função

// function soma(x, y) {
//     const resultado = x + y;
//     return resultado; // encerre minha função aqui e n leia nada abaixo de mim
//     console.log('Olá mundo');
// }

// const resultado = soma(2, 2);
// console.log(resultado); 

// function soma(x, y) {
//     const resultado = x + y;
//     console.log('Olá mundo');
//     return resultado; // encerre minha função aqui e n leia nada abaixo de mim
    
// }

// const resultado = soma(2, 2);
// console.log(resultado); 

// function soma(x, y) {
//     const resultado = x + y;
   
//     return resultado; // encerre minha função aqui e n leia nada abaixo de mim
    
// }

// const resultado = soma();
// console.log(resultado);


// function soma(x, y) {
//     const resultado = x + y;
   
//     return resultado; // encerre minha função aqui e n leia nada abaixo de mim
    
// }

// const resultado = soma(2, 10);
// console.log(resultado);


// function soma(x, y) {
//     const resultado = x + y;
   
//     return resultado; // encerre minha função aqui e n leia nada abaixo de mim
    
// }

// const resultado = soma('Dionisio', ' Samuel');
// console.log(resultado);


// function soma(x=1, y=1) {
//     const resultado = x + y;
   
//     return resultado; // encerre minha função aqui e n leia nada abaixo de mim
    
// }

// const resultado = soma();
// console.log(resultado);

// function soma(x=1, y=1) {
//     const resultado = x + y;
   
//     return resultado; // encerre minha função aqui e n leia nada abaixo de mim
    
// }

// const resultado = soma(4);
// console.log(resultado);

// function soma(x=1, y=1) {
//     const resultado = x + y;
   
//     return resultado; // encerre minha função aqui e n leia nada abaixo de mim
    
// }

// const resultado = soma(4, 6);
// console.log(resultado);

// função anonima dentro de uma variavel 

// const raiz = function(n) {
//     return n**0.5;
// };

// console.log(raiz(9));
// console.log(raiz(25));
// console.log(raiz(16));

//função com arrow function 
//substitui a palavra function
// const raiz = (n) => {
//     return n**0.5;
// };

// console.log(raiz(9));
// console.log(raiz(25));
// console.log(raiz(16));


// unica linha 

// const raiz = n => n **0.5;

// console.log(raiz(9));
// console.log(raiz(25));
// console.log(raiz(16));


const raiz = function(n) {
 return n **0.5;
}
console.log(raiz(9));
console.log(raiz(25));
console.log(raiz(16));