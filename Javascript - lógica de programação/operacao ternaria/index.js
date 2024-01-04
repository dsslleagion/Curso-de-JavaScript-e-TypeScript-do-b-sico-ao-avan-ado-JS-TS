// operador ternario em javascript "?" e ":"
// pode substituir ou encurtar muito seu codigo usando eles,
// usando em partes de If e Else por exemplo

// ex site com usuarios vips e users normais com base em seu score

// const pontuacaoUsuario = 999;

// if(pontuacaoUsuario >= 1000){
//     console.log('Usuario VIP');
// }else {
//     console.log('Usuario Normal');
// }

// operação ternaria da mesma coisa

//formula de uso 
// (condição) ? 'valor para verdadeiro' : 'valor falso';

// const pontuacaoUsuario = 999;
// const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário Normal';

// console.log(nivelUsuario);

// usando o ou agora

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);


