//comportamento similar a export default a exportação de função
// module.exports = function(x, y){
//     return x * y;
// }

//executando na mão

// console.log(module.exports(2,2));]

//exportando um numero

//module.exports = 1;

//exportando classe 

module.exports = class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando `);
        
    }
}
