// //return 
// //retorna um valor
// //termina a função 
// // function soma(a , b){
// //     return a + b; // faz alguma coisa
// // }

// // console.log(soma(1,2));

// // function soma2(a , b){
// //     return console.log(a + b);// não retorna nada mais exibe apenas igual ao alert
// // }

// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// });

// // possuimos funções que retornam e não retornam nada mas fazem alguma coisa
// // 

// function criaPessoa(nome, sobrenome) {
//     return {
//  nome, sobrenome
//     };
// }

// const p1 = criaPessoa('Dionisio', 'Samuel');// ambos fazem a mesma coisa
// const p2 = {
//     // ambos fazem a mesma coisa
//     nome: 'Tales',
//     sobrenome: 'Pinto'
// }

// console.log(p1);
// console.log(p2);


// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' '+ resto;
//     }
//     return falaResto;// retorno a função em si sem ser o conteudo da função 
// }

// // const olaMundo = falaFrase('Olá');
// // console.log(olaMundo);// retorna uma funcao


// const fala = falaFrase('Olá');
// const resto = fala('mundo');
// console.log(resto);

//ctr + shift + seta

// function duplica (n){
//     return n * 2;
// }
// function triplica (n){
//     return n * 3;
// }
// function quadriplica (n){
//     return n * 4;
// }
//console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));

// function criaMultiplicador (multiplicador){
// // multiplicador
// function multiplicador(n){
//     return n * multiplicador;
// }
// return multiplicacao;
// }

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function (n) {
        return n * multiplicador;
    };
}

// const duplica = criaMultiplicador(2):
// const triplica = criaMultiplicador(3):
// const quadriplica = criaMultiplicador(4):

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));
