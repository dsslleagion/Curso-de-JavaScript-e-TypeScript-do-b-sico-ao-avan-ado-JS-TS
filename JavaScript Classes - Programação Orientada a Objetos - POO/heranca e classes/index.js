// class DispositivoEletronico{
//     constructor(nome){
//         this.nome = nome;
//         this.ligado = false;
//     }
//     ligar(){
//         if(this.ligado) {
//         console.log(this.nome + 'Já ligado');
//         return;
//     }
//         this.ligado = true;
//     }

//     desligar(){
//         if(!this.ligado) {
//             console.log(this.nome + 'Já desligado');
//             return;
//         }
//         this.ligado = false;
//     }
// }

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.desligar();
// console.log(d1);


// aplicação de herança em classe

// class DispositivoEletronico{
//     constructor(nome){
//         this.nome = nome;
//         this.ligado = false;
//     }
//     ligar(){
//         if(this.ligado) {
//         console.log(this.nome + 'Já ligado');
//         return;
//     }
//         this.ligado = true;
//     }

//     desligar(){
//         if(!this.ligado) {
//             console.log(this.nome + 'Já desligado');
//             return;
//         }
//         this.ligado = false;
//     }
// }

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.desligar();
// // console.log(d1);

// class Smartphone extends DispositivoEletronico{
//     constructor(nome, cor, modelo){
//         //super chama o construtor para atributo derivado dele
//         super(nome);
//         //caso haja repetição de atributo da super classe havera
//         //se declarado da maneira abaixo
//         //this.nome = nome;
//         this.cor = cor;
//         this.modelo = modelo;
//     }
// }

// const s1 = new Smartphone('Samsung','Preto','Galaxy S10');
// console.log(s1);




// metodo de extensão da  classe DispositivoEletronico mais uma vez


class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado) {
        console.log(this.nome + 'Já ligado');
        return;
    }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(this.nome + 'Já desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.desligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        //super chama o construtor para atributo derivado dele
        super(nome);
        //caso haja repetição de atributo da super classe havera
        //se declarado da maneira abaixo
        //this.nome = nome;
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){
        console.log('Olha, você alterou o metodo ligar.');
        
    }
}
const s1 = new Smartphone('Samsung','Preto','Galaxy S10');
console.log(s1);


const t1 = new Tablet('iPad', true);
t1.ligar();
t1.ligar();
console.log(t1.ligado);

