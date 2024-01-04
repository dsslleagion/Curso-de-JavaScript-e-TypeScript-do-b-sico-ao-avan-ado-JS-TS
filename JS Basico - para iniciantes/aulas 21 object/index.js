// criando objetos da minha propria maneira
// const array = [1,2,3];
// array.push(4);
// array[0]="luiz";
// array = 'outra';
// console.log(array);

// let array = [1,2,3];
// array.push(4);
// array[0]="luiz";
// array = 'outra';
// console.log(array);

//conceito
// const nomeo1 ='Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nomeo2 ='Luiz';
// const sobrenome02 = 'Miranda';
// const idade02 = 25;


// // criação de objeto sempre utiliza as {}
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// //acessando o nome da pessoa 

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

//função conhecida como factory, ou seja cria de objetos 
// function criaPessoa (nome, sobrenome, idade){ //parametros
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }
// function criaPessoa(nome, sobrenome, idade) { //parametros
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }
// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);

// const pessoa2 = criaPessoa('Luiz1', 'Otávio', 25);

// const pessoa3 = criaPessoa('Luiz2', 'Otávio', 25);

// const pessoa4 = criaPessoa('Luiz3', 'Otávio', 25); //argumentos

// const pessoa5 = criaPessoa('Luiz4', 'Otávio', 25);

// const pessoa6 = criaPessoa('Luiz5', 'Otávio', 25);

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);
// console.log(pessoa3.nome);
// console.log(pessoa4.nome);
// console.log(pessoa5.nome, pessoa5.sobrenome);

//função dentro do metodo
const pessoa1 = {
        nome: 'Luiz',
        sobrenome: 'Miranda',
        idade: 25,
    //uma função sem usar o function ou =>
    fala(){ // this utiliza para chamar os atributos dentro do objeto
        // console.log(`Olá mundo! meu nome é ${this.nome} ${this.sobrenome} e tenho  ${this.idade} anos`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;

    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();