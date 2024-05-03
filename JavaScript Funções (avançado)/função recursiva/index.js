// funções recursivas 


// function recursiva(max){
//     console.log(max);
//     if (max >= 10) return;
//     max++;
    
//     recursiva(max);// função recursiva executa o codigo dela e chama ela devolta
// }

// recursiva(-10);

function recursiva(max){
    console.log(max);
    if (max >= 100000000000000) return;
    max++;
    
    recursiva(max);// função recursiva executa o codigo dela e chama ela devolta
}

recursiva(0);