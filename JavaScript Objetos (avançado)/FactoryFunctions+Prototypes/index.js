//uma factory function tira a necessidade de usar a palavra new para criar um objeto 
//composição é varios objetos dentro de um unico o objeto

//pessima pratica deixar a cada objeto retornar todas as funções juntas,
// por que se torna custoso para a performance do sistema 
// logo vou colocar na função fabrica as funções dentro do proto
// function criaPessoa(nome,sobrenome) {
//     return{
//         nome,
//         sobrenome,
//         fala(){
//             console.log(`${this.nome} está falando.`);
//         },
//         comer(){
//             console.log(`${this.nome} está comendo.`);

//         },
//         beber(){
//             console.log(`${this.nome} está bebendo.`);

//         }
//     };
// }

// const p1 = criaPessoa('Luiz','Otávio');
// console.log(p1);




//forma correta

// function criaPessoa(nome, sobrenome) {
//     //prototype das pessoas
//     const pessoaPrototype = {
//         fala() {
//             console.log(`${this.nome} está falando.`);
//         },
//         comer() {
//             console.log(`${this.nome} está comendo.`);

//         },
//         beber() {
//             console.log(`${this.nome} está bebendo.`);

//         }
//     };
//     //linkando prototype ao objeto que estou criando e retornando
//     return Object.create(pessoaPrototype, {
//         nome:{value:nome},
//         sobrenome: {value:sobrenome}
//     });
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1);

// const p2 = criaPessoa('Dionisio', 'Samuel');
// console.log(p2);


// melhoria add composição 

// desacoplando
const falar ={
    fala() {
        console.log(`${this.nome} está falando.`);
    },
};
const comer ={
    comer() {
        console.log(`${this.nome} está comendo.`);

    },
};
const beber ={
    beber() {
        console.log(`${this.nome} está bebendo.`);

    },
};

// const pessoaPrototype = {...falar,...comer,...beber}
//ou
const pessoaPrototype = Object.assign({},falar,comer,beber);


function criaPessoa(nome, sobrenome) {
    
    //linkando prototype ao objeto que estou criando e retornando
    return Object.create(pessoaPrototype, {
        nome:{value:nome},
        sobrenome: {value:sobrenome}
    });
};

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);

const p2 = criaPessoa('Dionisio', 'Samuel');
console.log(p2);


//composição é varios objetos dentro de um unico o objeto