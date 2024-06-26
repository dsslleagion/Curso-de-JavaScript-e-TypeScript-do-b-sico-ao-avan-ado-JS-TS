// funções que retornam objetos 
// Factory function (Função Fabrica)
// Constructor function (função construtura)

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

// function criaPessoa(nome, sobrenome, a, p){
//         return{
//             nome, sobrenome, fala : function(assunto) {
//                 return `${this.nome} está ${assunto}` // funções dentro de objetos é chamado de metodos
//             },
//             altura : a,
//             peso : p,
//             imc(){
//                 const indice = this.peso / (this.altura ** 2);
//                 return indice.toFixed(2)
//             }
//             // this sempre se refere a pessoa que chamou o que está sendo executado 
//         };
//     }
//     // this é igual ao p1, ou seja quem chamou 
    
//     const p1 = criaPessoa('Dionisio','Samuel', 1.8, 80);
//     console.log(p1.imc());
//     const p2 = criaPessoa('Mario','Samuel', 1.6, 46);
//     console.log(p1.fala('falando sobre js'));
//     console.log(p2.nome);


// function criaPessoa(nome, sobrenome, a, p){
//     return{
//         nome, sobrenome, fala : function(assunto) {
//             return `${this.nome} está ${assunto}` // funções dentro de objetos é chamado de metodos
//         },
//         altura : a,
//         peso : p,
//         get imc(){ // fingindo ser um atributo com o get ou Getter
//             const indice = this.peso / (this.altura ** 2);
//             return indice.toFixed(2)
//         }
//         // this sempre se refere a pessoa que chamou o que está sendo executado 
//     };
// }
// // this é igual ao p1, ou seja quem chamou 

// const p1 = criaPessoa('Dionisio','Samuel', 1.8, 80);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);

function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, sobrenome,
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor){
          valor = valor.split(' ');
          this.nome = valor.shift();
          this.sobrenome = valor.join(' ')
          console.log(valor);
        },
         fala : function(assunto) {
            return `${this.nome} está ${assunto}` // funções dentro de objetos é chamado de metodos
        },
        altura : a,
        peso : p,
        get imc(){ // fingindo ser um atributo com o get ou Getter
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
        // this sempre se refere a pessoa que chamou o que está sendo executado 
    };
}
// this é igual ao p1, ou seja quem chamou 

const p1 = criaPessoa('Dionisio','Samuel', 1.8, 80);
p1.nomeCompleto = 'Dionisio Samuel';
console.log(p1.nomeCompleto);
