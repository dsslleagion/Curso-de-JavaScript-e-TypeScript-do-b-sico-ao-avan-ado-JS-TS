// //  atribuição via destruturação do desafio de mudar as variaveis a , b e c
// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras =  [b, c, a]; // redefinindo os valores das variaveis com array
// [a , b , c] = letras;// usando os indices para redefinir os seus respectivos valores usando a variavel letras


// console.log(a,b,c);

//atribuição via desestruturação

//             //   0   1  2  3 4  5  6  7   8
// const numeros = [1, 2, 3, 4, 5, 6, 7 ,8 , 9];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);


// const numeros = [1, 2, 3, 4, 5, 6, 7 ,8 , 9];
// const [primeiroNumero, segundoNumero] = numeros ;
// console.log(primeiroNumero, segundoNumero);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000 ,8000 , 9000];
// const [primeiroNumero, segundoNumero] = numeros ;
// console.log(primeiroNumero, segundoNumero);

//pegando os indices e depois do resto do array
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000 ,8000 , 9000];
// const [um, dois, tres, ...resto] = numeros ;
// console.log(um, dois, tres);
// console.log(resto);

// ... rest(resto de algo), ...(espalhar ou distruibuir as coisas) spread

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000 ,8000 , 9000];
// const [um, , tres, , cinco, ,sete] = numeros ;
// console.log(um, tres, cinco);

//  indices            0       1       2
//                   0,1,2   0,1,2   0,1,2
// const numeros = [[1,2,3],[4,5,6],[7,8,9]];

// console.log(numeros[1][2]);




const numeros = [[1,2,3],[4,5,6],[7,8,9]];
const [lista1 , lista2, lista3] = numeros;
console.log(lista1[2],lista2[0],lista3[1]);