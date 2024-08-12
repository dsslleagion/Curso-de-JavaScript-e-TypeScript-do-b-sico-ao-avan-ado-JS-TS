// todo objeto criado possui um Object.prototype dentro dela por padrão
//new Object -. Object.prototype
// const objA = {
//     chaveA: 'A'
//     //_proto_:Object.prototype
// };
// //new Object -. Object.prototype
// const objB = {
//     chaveB: 'B'
//     //_proto_:objA
// };
// //new Object -. Object.prototype
// const objC = new Object
// objC.chaveC = 'C';
// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objA);
// console.log(objC.chaveA);


//exemplo real

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
   this.preco = this.preco - (this.preco * (percentual/100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100))
}

const  p1 = new Produto('Camiseta',50);
//criação de object de maneira literal
const p2 = {
    nome: 'Caneca',
    preco:15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);


// p1.desconto(100);
p1.aumento(100);
console.log(p1);


// outra maneira de usar o prototype 

// const p3 = Object.create(Object.prototype);
// console.log(p3);

// const p3 = Object.create(Produto.prototype);
// p3.preco = 113;
// p3.aumento(10);
// console.log(p3);


const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value:99
    },
    tamanho2:{
        writable: true,
        configurable: true,
        enumerable: true,
        value:42
    }
});
p3.aumento(10);
console.log(p3);
