/**
 * Operadores Lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */

// imaginando que duas afirmações ocorram o resultado será true
// se eu tiver dinheiro no bolso (primeiro true) e o dia fizer sol (segundo true) o resultado deverá ser true 
//caso uma das afirmações não aconteçam então será false
// console.log(true && true);
// pode possuir mais afirmações, e todas devem ocorrer para retornar true
// console.log(true && true && true && true );

// const expressaoAnd = true && true && false && true;
// console.log(expressao);


// const expressaoAnd = true && true && false && true;
// console.log(expressaoAnd);

// com o OR se uma das expressoes forem verdadeiras a expressao toda retorna true
// const expressaoOr = true || false;
// console.log(expressaoOr);

// o Or só retorna false se todas as expressoes forem falsas
// const expressaoOr = true || false || true || false;
// console.log(expressaoOr);

// const usuario = 'Dionisio'; // form usuario digitou
// const senha = '123456'; // form usuario digitou

// // 
// const vaiLogar = usuario === 'Dionisio' && senha === '123456';
// console.log(vaiLogar);


// NOT inverte uma expressao 
// o que é false retorna true porque o NOT nega a expressao
// console.log(!false);

// se eu nego uma vez com o ! ele retorna false se for duas vezes o !! retorna true denovo
console.log(!!true);
