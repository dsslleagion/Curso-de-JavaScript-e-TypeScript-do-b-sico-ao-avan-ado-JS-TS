// Escreva uma função que recebe 2 numeros e retorne o maior deles


function compare_num(x, y) {
    if (x > y) {
        console.log(`o numero ${x} é o maior`);
    } else if (x < y) {
        console.log(`o numero ${y} é o maior`);
    } else {
        console.log("Ambos são equivalentes")
    }
}

compare_num(35, 35);

// function max(x, y){
//     if (x > y){
//         return x;
//     } else{
//         return y;
//     }
// }
// function max(x, y) {
//     if (x > y) 
//         return x;
//     return y;

// }

// function max(x, y) {
//    return x > y ? x : y;
// }

// const max2 =  (x, y) => {
//     return x > y ? x : y;
//  }

const max2 =  (x, y) => x > y ? x : y;
 

const maior = max2(1, 2);
console.log(maior);

