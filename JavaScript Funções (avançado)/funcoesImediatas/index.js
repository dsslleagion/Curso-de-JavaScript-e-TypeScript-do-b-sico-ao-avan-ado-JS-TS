//funções auto invocadas IIFE - Immediatly invoked function expression
//fugir do escopo global
// function quaquerCoisa(){
//     console.log(33333424242);
// }
// quaquerCoisa(); // toca no escopo global

// função sem nome que é invocada automaticamente

// (function() {
//     console.log(12123131);
//     const nome = 'Dionisio';

//     console.log(nome);
// })();

// const nome = 'Qualquer Coisa';

// (function() {
 
//     const sobrenome = 'Samuel'
//     function criaNome(nome){
//         return nome + ' '+ sobrenome;
//     } 
//     function falaNome(){
//         console.log(criaNome('Dionisio'));
//     }
//     falaNome();
// })();

// const nome = 'Qualquer Coisa';


// passando parametros

(function(idade, peso, altura) {
 
    const sobrenome = 'Samuel'
    function criaNome(nome){
        return nome + ' '+ sobrenome;
    } 
    function falaNome(){
        console.log(criaNome('Dionisio'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

//formato de função anonima
(function(){

})();

const nome = 'Qualquer Coisa';

