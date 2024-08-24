// função do getter e setter numa função construtora e em classes
//os dois permitem que você possa privar seu codigo mas tambem permitem alterar seu codigo de
//maneira segura, agora o symbol pode armazenar o valor unico de um objeto especifico
// como no exemplo do fusca, possui uma instancia com valor unico que só pode ser modificado com set
// e com o get vizualizado


//imaginando num ambiente de desenvolvimento
//como garantir que a classe carro simulando um codigo
//de um jogo de corrida não seja alterado as propriedades da classe carro?
// class Carro{
//     constructor(nome, velocidade){
//         this.nome = nome;
//         this.velocidade = 0;
//     }

//     acelerar(){
//         if(this.velocidade >= 100) return;
//         this.velocidade++;
//     }

//     freiar(){
//         if(this.velocidade <= 0) return;
//         this.velocidade--;
//     }
// }

// const c1 = new Carro("Fusca");

// for(let i = 0; i <= 200; i++){
//     c1.acelerar();
// }
// c1.velocidade = 1500;
// console.log(c1);


//solução 

// //Symbol = cria uma chave privada do seu objeto
// const _velocidade = Symbol('velocidade');
// //Symbol cria um id aleatorio 
// //ou seja nenhum symbol sera igual ao outro

// class Carro{
//     constructor(nome, velocidade){
//         this.nome = nome;
//         this[_velocidade] = 0;
//     }

//     get velocidade(){
//         return this[_velocidade];
//     }
//     acelerar(){
//         if(this[_velocidade] >= 100) return;
//         this[_velocidade]++;
//     }

//     freiar(){
//         if(this[_velocidade] <= 0) return;
//         this[_velocidade]--;
//     }
// }

// const c1 = new Carro("Fusca");

// for(let i = 0; i <= 200; i++){
//     c1.acelerar();
// }

// console.log(c1);


// agora em caso de settar ou editar o valor da limitação de velocidade

// //Symbol = cria uma chave privada do seu objeto
// const _velocidade = Symbol('velocidade');
// //Symbol cria um id aleatorio 
// //ou seja nenhum symbol sera igual ao outro

// class Carro{
//     constructor(nome, velocidade){
//         this.nome = nome;
//         this[_velocidade] = 0;
//     }

//     set velocidade(valor){
//         if(typeof valor !== 'number') return;
//         if(valor >= 100 || valor <= 0) return;
//         return this[_velocidade]; 
//     }
//     get velocidade(){
//         return this[_velocidade];
//     }
//     acelerar(){
//         if(this[_velocidade] >= 100) return;
//         this[_velocidade]++;
//     }

//     freiar(){
//         if(this[_velocidade] <= 0) return;
//         this[_velocidade]--;
//     }
// }

// const c1 = new Carro("Fusca");

// for(let i = 0; i <= 200; i++){
//     c1.acelerar();
// }



// console.log(c1);


//mostando o momento em que o getter é acessado

//Symbol = cria uma chave privada do seu objeto
const _velocidade = Symbol('velocidade');
//Symbol cria um id aleatorio 
//ou seja nenhum symbol sera igual ao outro

class Carro{
    constructor(nome, velocidade){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER');
        
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        return this[_velocidade]; 
    }
    get velocidade(){
        console.log('GETTER');
        
        return this[_velocidade];
    }
    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro("Fusca");

//exibindo GETTER
console.log(c1.velocidade);

//EXIBINDO GETTER
c1.velocidade=99;
console.log(c1.velocidade);


// outro exemplo simples

class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome =sobrenome;
    }

        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome;
        }
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
}

const p1 = new Pessoa('Dionisio', 'Samuel');
p1.nomeCompleto = "Dionisio Samuel Dos Santos Leão";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
