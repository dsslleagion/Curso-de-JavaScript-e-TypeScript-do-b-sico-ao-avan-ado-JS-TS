// let i = 0;

// while (i <= 10 ){
//     console.log(i);
//     i++;
// }

// const nome = 'Dionisio';
// let i = 0;

// while (i <= nome.length){
//     console.log(nome[i]);
//     i++;
// }

// function random(min, max){
//     const r = Math.random() * (max - min) + min;
//     return r;
// }

// let rand = random(1, 50);
// console.log(rand);



// function random(min, max){
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// let rand = random(1, 50);
// console.log(rand);

//_______________________________________________________________
// function random(min, max){
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }
// const min = 1;
// const max = 50;
// let rand = random(min, max);

// while (rand !== 10){//while checa a condição e depois executa o laço
//     rand = random(min, max);
//     console.log(rand);
// }

//_______________________________________________________________

//do while executa primeiro depois checa a condição 

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10){//while checa a condição e depois executa o laço
    rand = random(min, max);
    console.log(rand);
}
console.log('________________________________');

do{
    rand = random(min, max);
    console.log(rand);

}while(rand !== 10);