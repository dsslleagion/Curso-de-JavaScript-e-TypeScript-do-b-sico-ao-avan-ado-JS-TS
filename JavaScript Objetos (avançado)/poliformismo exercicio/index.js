// //classe = função construtora 

// //superclass ou classe mãe ou classe pai
// function Conta(agencia, conta, saldo) {
//     this.agencia = agencia;
//     this.conta = conta;
//     this.saldo = saldo;
// }

// Conta.prototype.sacar = function (valor) {
//     if (valor > this.saldo) {
//         console.log(`Saldo insuficiente:${this.saldo}`);
//         return;
//     }
//     this.saldo -= valor;
// };
// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor;
//     this.verSaldo();
// };
// Conta.prototype.verSaldo = function () {
//     console.log(`Ag/c.:${this.agencia}/${this.conta}` | +
//         `Saldo: R$ ${this.saldo.toFixed(2)}`
//     );

// };

// const conta1 = new Conta(11, 22, 10);
// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(30);
// conta1.sacar(0.01);
// console.log(conta1);





// aumentando a complexidade de conta corrente e conta poupança

// //classe = função construtora 

// //superclass ou classe mãe ou classe pai
// function Conta(agencia, conta, saldo) {
//     this.agencia = agencia;
//     this.conta = conta;
//     this.saldo = saldo;
// }

// Conta.prototype.sacar = function (valor) {
//     if (valor > this.saldo) {
//         console.log(`Saldo insuficiente:${this.saldo}`);
//         return;
//     }
//     this.saldo -= valor;
//     this.verSaldo();
// };
// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor;
//     this.verSaldo();
// };
// Conta.prototype.verSaldo = function () {
//     console.log(`Ag/c.:${this.agencia}/${this.conta}` | +
//         `Saldo: R$ ${this.saldo.toFixed(2)}`
//     );

// };

// //sobrescrevendo metodo sacar
// function CC(agencia,conta,saldo,limite){
//     Conta.call(this, agencia, conta, saldo);
//     this.limite = limite;
// }
// CC.prototype = Object.create(Conta.prototype);
// CC.prototype.construtor = CC;

// CC.prototype.sacar = function (valor) {
//     if (valor > (this.saldo + this.limite)) {
//         console.log(`Saldo insuficiente:${this.saldo}`);
//         return;
//     }
//     this.saldo -= valor;
//     this.verSaldo();
// };

// // teste 

// const cc = new CC(11, 22, 0, 100);
// cc.depositar(10);
// cc.sacar(110);
// cc.sacar(1);
// console.log(cc);


//aumentando e trocando o comportamento do metodo sacar e add conta poupança


//classe = função construtora 

//superclass ou classe mãe ou classe pai
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente:${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c.:${this.agencia}/${this.conta}` | +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    );

};

//sobrescrevendo metodo sacar
function CC(agencia,conta,saldo,limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.construtor = CC;

CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente:${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia,conta,saldo){
    Conta.call(this, agencia, conta, saldo);
    
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.construtor = CP;

// teste 

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new CP(12,33, 0);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

