// function funcao(){
//     console.log(arguments[0]);
// }
// funcao('valor',1,2,3,4,5,6,7,8,9,0);// tudo que fica dentro de (se chama argumentos e podem ser exibidos)

// argumentos que sustenta todos os argumentos enviados em funções criadas com a palavra "function"
//________________________________________________________________________________
// function funcao(parametros da função){ 
//     console.log(arguments[0]);
// }
// funcao(Argumento da função)
//________________________________________________________________________________

// function funcao(){
//     console.log(arguments[10]);
// }
// funcao('valor',1,2,3,4,5,6,7,8,9,'Dionisio');

// argumentos que sustenta todos os argumentos enviados 
// function funcao(){
//     let total = 0;
//     for(argumento of arguments){
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1,2,3,4,5,6,7,8,9,0);

// function funcao(a,b,c){
//     let total = 0;
//     for(argumento of arguments){
//         total += argumento;
//     }
//     console.log(total, a,b,c);
// }
// funcao(1,2,3,4,5,6,7,8,9,0);


// function funcao(a,b,c,d,e,f){
//     console.log(a,b,c,d,e,f);
// }
// funcao(1,2,3,4,5,6,7,8,9,0);


// function funcao(a,b,c,d,e,f){
//     console.log(a,b,c,d,e,f);
// }
// funcao(1,2,3);

// function funcao(a, b){
//     b = b || 0;
//     a = a || 0;
//     console.log(a + b);
// }
// funcao(1);

// function funcao(a=0, b=0){
//     console.log(a + b);
// }
// funcao(1);


// function funcao(a, b=2, c=4){
//         console.log(a + b + c);
//     }
//     funcao(2,'',20);// concatenou

// function funcao(a, b=2, c=4){
//     console.log(a + b + c);
// }
// funcao(2,undefined,20);//assumiu e somou 

// function funcao(a, b=2, c=4){
//     console.log(a + b + c);
// }
// funcao(2,null,20);// assumi o null como zero

//atribuição via desestruturação 
// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }
// funcao({nome:'Dionisio', sobrenome:'Samuel',idade:22});

//outra forma
// function funcao({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// }
// let obj = {nome: "Dionisio",sobrenome:"Samuel", idade:22}
// funcao = obj;

//outra forma desestruturando array
//outra forma
// function funcao([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Dionisio','Samuel',22])

//sempre usar o "..." no final dos parametros
// function conta(operador, acumulador, ...numeros){//substitui a necessidade de colocar array nos parametros ou na chamada de função para pegar todos os elementos de 20 a 50
//     for(let numero of numeros){
//        if (operador == '+') acumulador += numero;
//        if (operador == '/') acumulador /= numero;
//        if (operador == '-') acumulador -= numero;
//        if (operador == '*') acumulador *= numero;
//     }
//    console.log(acumulador);
// }
// conta('+',  200, 200,30,40,50);

// const conta = function (operador, acumulador, ...numeros){//continua  funcionando o "..." arguments
//      console.log(arguments);
// }
// conta('+', 1, 200,30,40,50);


// const conta = (operador, acumulador, ...numeros)=>{//não  funciona o "..." o arguments
//      console.log(arguments);
// }
// conta('+', 1, 200,30,40,50);


// const conta = (operador, acumulador, ...numeros) => {
//     console.log(operador, acumulador, numeros);
// }
// conta('+', 1, 200,30,40,50);

const conta = (args) => {// para exibir tudo precisa dos ...
        console.log(args);
    }
    conta('+', 1, 200,30,40,50);