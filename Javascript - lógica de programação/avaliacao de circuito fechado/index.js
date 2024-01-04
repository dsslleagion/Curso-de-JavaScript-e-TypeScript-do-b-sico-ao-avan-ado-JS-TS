/**
 * && -> false && true - > false "valor mesmo"
 * || -> true && false -> vai retornar o "valor verdadeiro"
 * FALSY - valor falso não literal
 * 
 * 
 * false - valor falso literal
 * 0
 * '' "" `` - string vazia
 * null / undefined
 * NaN
 */

// console.log('Dionisio Samuel' && 0 && 'Maria');
//  console.log('Dionisio Samuel' && true && 'Maria'); // checa todas as expressões e retorna a ultima 
// console.log('Dionisio Samuel' && true && NaN); // retorna o valor da expressao falsa
// tudo pode ser avaliado como true or false em javascript

// console.log('Dionisio Samuel' && 'Maria'); // checa todas as expresoes e retorna a ultima expressao retornada
// console.log('Dionisio Samuel' && '' && 'Maria');// nãoo retorna nada porque possui string vazia
// console.log('Dionisio Samuel' && undefined && 'Maria') // retorna undefined
// console.log('Dionisio Samuel' && NaN && 'Maria'); //retorna NaN



// function falaOi () {
//     return 'Oi';
// }

// // const vaiExecutar = false; // pode usar dessa forma, mas se não inicializarmos a a variavel por padrao ela será false
// // let vaiExecutar;
// let vaiExecutar= 'Joãozin'; // se caso a variavel tiver um valor verdadeiro retorna verdadeiro

// console.log(vaiExecutar && falaOi());


// analise do OR 
 
// console.log(0 || false || null || 'Dionisio' || true); // retorna apenas o primeiro valor TRUE REALMENTE  VERDADEIRO e para de checar os proximos

// console.log(0 || false || null || 'Dionisio' || true);


// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao);

// const a = 0;

// const b = null;

// const c = 'false';// aqui

// const d = false;

// const e = NaN;

// console.log(a || b || c || d || e);


const a = 0;

const b = null;

const c = false;

const d = false;

const e = NaN;// aqui, a ultima falsa sera retornada

console.log(a || b ||'joazon' || c || d || e);