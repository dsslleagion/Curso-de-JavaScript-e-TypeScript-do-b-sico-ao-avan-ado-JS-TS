// como congelar apenas 1 propriedade para não ser modificada no objeto
// defineProperty (singular para propriedade ser modificada dentro do objeto)
// defineProperties (plural para propriedade ser modificada dentro do objeto)

// function Produto(nome, preco, estoque){
//     //estoque não pode ser alterada ou exibida

//     //(this) variavel publica nesse padrão this.nome = nome;
//     this.nome=nome;
//     this.preco = preco;
//     this.estoque = estoque;
// }

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1.nome);
// console.log(p1);



// alterando propriedades


// function Produto(nome, preco, estoque){
//     //estoque não pode ser alterada ou exibida

//     //(this) variavel publica nesse padrão this.nome = nome;
//     this.nome=nome;
//     this.preco = preco;

//     // Object.defineProperty(this, 'estoque', {
//     //     //responsavel por exibir no objeto {mostra chave:}
//     //     enumerable: true,
//     //     //value exibe o valor dentro da variavel da propriedade do objeto
//     //     value: estoque,
//     //     //writable responsavel por alterar ou não
//     //     writable: false, 
//     //     // permite apagar ou não a chave ou alterar
//     //     configurable:true
 
//     // });
//     Object.defineProperty(this, 'estoque', {
//         //responsavel por exibir no objeto {mostra chave:}
//         enumerable: true,
//         //value exibe o valor dentro da variavel da propriedade do objeto
//         value: estoque,
//         //writable responsavel por alterar ou não
//         writable: true, 
//         // permite apagar ou não a chave ou alterar
//         configurable:false
 
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1.nome);
// p1.estoque = 5000;
// delete p1.estoque;
// console.log(p1);
// //p1.estoque = 5000;//se caso for true em writeble:true



// function Produto(nome, preco, estoque){
//     //estoque não pode ser alterada ou exibida

//     //(this) variavel publica nesse padrão this.nome = nome;
//     this.nome=nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque', {
//         //responsavel por exibir no objeto {mostra chave:}
//         enumerable: true,
//         //value exibe o valor dentro da variavel da propriedade do objeto
//         value: function(){
//             return estoque;
//         },
//         //writable responsavel por alterar ou não
//         writable: true, 
//         // permite apagar ou não a chave ou alterar
//         configurable:false
 
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 5000;
// console.log(p1.estoque());


// function Produto(nome, preco, estoque){
//     //estoque não pode ser alterada ou exibida

//     //(this) variavel publica nesse padrão this.nome = nome;
//     this.nome=nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque', {
//         //responsavel por exibir no objeto {mostra chave:}
//         enumerable: true,
//         //value exibe o valor dentro da variavel da propriedade do objeto
//         value: estoque,
//         //writable responsavel por alterar ou não
//         writable: true, 
//         // permite apagar ou não a chave ou alterar
//         configurable:false
 
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 5000;
// console.log(p1);


// //ver as chaves do objeto em array
// function Produto(nome, preco, estoque){
//     //estoque não pode ser alterada ou exibida

//     //(this) variavel publica nesse padrão this.nome = nome;
//     this.nome=nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque', {
//         //responsavel por exibir no objeto {mostra chave:}
//         enumerable: true,
//         //value exibe o valor dentro da variavel da propriedade do objeto
//         value: estoque,
//         //writable responsavel por alterar ou não
//         writable: true, 
//         // permite apagar ou não a chave ou alterar
//         configurable:false
 
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(Object.keys(p1));
// //nome, preco, estoque

// for(let chave in p1){
//     console.log(chave);
// }

// DefineProperties

//ver as chaves do objeto em array
function Produto(nome, preco, estoque){
    //estoque não pode ser alterada ou exibida

    //(this) variavel publica nesse padrão this.nome = nome;
    this.nome=nome;
    this.preco = preco;

    Object.defineProperties(this, {
       nome: {
        //responsavel por exibir no objeto {mostra chave:}
        enumerable: true,
        //value exibe o valor dentro da variavel da propriedade do objeto
        value: nome,
        //writable responsavel por alterar ou não
        writable: true, 
        // permite apagar ou não a chave ou alterar
        configurable:true
       },
       preco: {
           //responsavel por exibir no objeto {mostra chave:}
           enumerable: true,
           //value exibe o valor dentro da variavel da propriedade do objeto
           value: preco,
           //writable responsavel por alterar ou não
           writable: true, 
           // permite apagar ou não a chave ou alterar
           configurable:true
       },

    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
//nome, preco, estoque

for(let chave in p1){
    console.log(chave);
}