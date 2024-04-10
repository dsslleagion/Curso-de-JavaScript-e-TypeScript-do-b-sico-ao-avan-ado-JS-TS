// funções que retornam objetos 

// function criaPessoa(nome, sobrenome){
//     return{
//         nome, sobrenome
//     };
// }

// const p1 = criaPessoa('Dionisio','Samuel');
// console.log(p1);

// function criaPessoa(nome, sobrenome){
//         return{
//             nome, sobrenome, fala : function(assunto) {
//                 return `${nome} está ${assunto}` // funções dentro de objetos é chamado de metodos
//             }
//         };
//     }
    
//     const p1 = criaPessoa('Dionisio','Samuel');
//     console.log(p1.fala('falando sobre js'));
    
// function criaPessoa(nome, sobrenome){
//     return{
//         nome, sobrenome, fala : function(assunto) {
//             return `${this.nome} está ${assunto}` // funções dentro de objetos é chamado de metodos
//         },
//         // this sempre se refere a pessoa que chamou o que está sendo executado 
//     };
// }
// // this é igual ao p1, ou seja quem chamou 

// const p1 = criaPessoa('Dionisio','Samuel');
// const p2 = criaPessoa('Mario','Samuel');
// console.log(p1.fala('falando sobre js'));
// console.log(p2.nome);

function criaPessoa(nome, sobrenome, a, p){
        return{
            nome, sobrenome, fala : function(assunto) {
                return `${this.nome} está ${assunto}` // funções dentro de objetos é chamado de metodos
            },
            altura : a,
            peso : p,
            imc(){
                const indice = this.peso / (this.altura ** 2);
                return indice.toFixed(2)
            }
            // this sempre se refere a pessoa que chamou o que está sendo executado 
        };
    }
    // this é igual ao p1, ou seja quem chamou 
    
    const p1 = criaPessoa('Dionisio','Samuel', 1.8, 80);
    console.log(p1.imc());
    const p2 = criaPessoa('Mario','Samuel', 1.6, 46);
    console.log(p1.fala('falando sobre js'));
    console.log(p2.nome);
