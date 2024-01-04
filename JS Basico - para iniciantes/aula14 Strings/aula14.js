// let umaString = "um \"texto\""; // escapar o caractere string com \\, util
// console.log(umaString);

// let umaString = "um \\texto"; // escapar o caractere string com \\, util
// console.log(umaString);


// as strings são indexaveis 
// sequencia de index 0123456789
// no exemplo pegando o elemento no indice 4 que no caso seria o "e"
//se caso coloco um valor maior no indice ele retorna undefined 
// e negativo tambem exibira undefined se sair do range
//  let umaString = "um texto"; 
//  console.log(umaString[4]);

//  let umaString = "um texto"; 
//  console.log(umaString.charAt(6)); // charAt faz a mesma coisa que o []
// // se o charAT for selecionado algo fora do range ele exibirá um vazio ao inves de undefined 

// 3 formas de Concatenação
//concatenação sem operador logico
 let umaString = "O Rato roeu a roupa do rei de roma"; 
//  console.log(umaString.concat(' em',' um', ' lindo dia.'));

//  console.log(umaString + ' em um lindo dia.');

//  // template string para concatenar  
//  console.log(`${umaString} em um lindo dia`);


// pesquisar por uma string 
//qual indice começa um texto
// console.log(umaString.indexOf('Texto'));
// buscando o indice apartir da palavra "um"
// console.log(umaString.indexOf('o',3));
// começa buscar de tras para frente
// console.log(umaString.lastIndexOf('o'));
// console.log(umaString.lastIndexOf('m', 3));

//expressões regulares
// console.log(umaString.match(/[a-z]/g));

// console.log(umaString.search(/[a-z]/g));
// console.log(umaString.search(/[x]/g));

// console.log(umaString.replace('Um', 'Outra'));

// console.log(umaString.replace(/Um/, 'Outra'));

// console.log(umaString.replace(/r/g, '#'));

//soma de strings
// console.log(umaString.length);

//corta string 
// console.log(umaString.slice(2, 5));

// console.log(umaString.slice(-3));

// console.log(umaString.length (-3));
// console.log(umaString.length (32));

// console.log(umaString.slice(-5, umaString.length -1));

//console.log(umaString.substring(umaString.length - 5, umaString.length -1)); // evitar usar

// // lista de palavras em array
// console.log(umaString.split(' '));

// // lista de palavras em array
// console.log(umaString.split('r'));

// // lista de palavras em array
// console.log(umaString.split(' ', 3));

//retorna a string toda maiuscula
// console.log(umaString.toLocaleUpperCase());
// //minuscula
// console.log(umaString.toLowerCase());