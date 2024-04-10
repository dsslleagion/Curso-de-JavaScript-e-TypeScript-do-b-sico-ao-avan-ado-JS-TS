//closure das funções 

//função global
// function retornaFuncao(){
//     const nome = 'Dionisio';
//     return function () {
//         return nome;//closure de fechamento e retorna a variavel closures
//     };
// }

// const funcao = retornaFuncao();
// console.dir(funcao);

//closure é a função de acessar outras funções no escopo lexico 



// vantagens de usar o closure é definir valores dentro de funções que não passaram dados dentro delas
// 
function retornaFuncao(nome){
   
    return function () {
        return nome;//closure de fechamento e retorna a variavel closures
    };
}

const funcao = retornaFuncao('Dionisio');
const funcao2 = retornaFuncao('samuel');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

//resumindo closure é a habilidade da função tem para acessar seu escopo lexico 