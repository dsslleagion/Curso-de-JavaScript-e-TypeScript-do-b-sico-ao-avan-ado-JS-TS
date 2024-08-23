// classe é a mesma coisa que função construtora
// só é um meio diferente de escrever uma função contrutora

// class Pessoa {
//     constructor(nome, sobrenome){

//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// // instanciar é criar um objeto apartir da classe
// const p1 = new Pessoa('Dionisio','Samuel');
// console.log(p1);



//agora criando metodo


// class Pessoa {
//     constructor(nome, sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     falar(){
//         console.log(`${this.nome} está falando`);
//     }
//     comer(){
//         console.log(`${this.nome} está comendo`);
//     }
//     beber(){
//         console.log(`${this.nome} está bebendo`);
//     }
// }

// // instanciar é criar um objeto apartir da classe
// const p1 = new Pessoa('Dionisio','Samuel');
// console.log(p1);

// vantagens de fazer dessa maneira a adição de metodos na classe 
// é porque não havera a nessecidade de atrelar com o prototype metodos aos objetos
// basta apenas criar metodos dentro da classe e função contrutora.


// class Pessoa {
//     constructor(nome, sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     falar(){
//         console.log(`${this.nome} está falando`);
//     }
//     comer(){
//         console.log(`${this.nome} está comendo`);
//     }
//     beber(){
//         console.log(`${this.nome} está bebendo`);
//     }
// }

// // instanciar é criar um objeto apartir da classe
// const p1 = new Pessoa('Dionisio','Samuel');
// const p2 = new Pessoa('Tales','Beirado');
// const p3 = new Pessoa('Vivo','Lixo');
// const p4 = new Pessoa('Pé','De Pano');
// const p5 = new Pessoa('Luiz','Miranda');
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);
// console.log(p5);


class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

// paralelo da mesma função só sem utilizar classe

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`);
};
Pessoa2.prototype.comer = function () {
    console.log(`${this.nome} está comendo.`);
};
Pessoa2.prototype.beber = function () {
    console.log(`${this.nome} está bebendo.`);
};


const p1 = new Pessoa('Dionisio','Samuel');
const p2 = new Pessoa2('Tales','Beirado');
console.log(p1);
console.log(p2);