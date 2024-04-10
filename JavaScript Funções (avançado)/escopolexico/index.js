// const nome = 'Dionisio';

// function falaNome(){
//     console.log(nome);
// }
// falaNome();

// // escopo léxico , a função conhece tudo que foi declarado perto dela

// function usaFalaNome (){
//     falaNome();
// }
// usaFalaNome()

const nome = 'Dionisio';

function falaNome(){
    const nome = 'Dionisio';
    console.log(nome);
}
falaNome();

// escopo léxico , a função conhece tudo que foi declarado perto dela

function usaFalaNome (){
    falaNome();
}
usaFalaNome()