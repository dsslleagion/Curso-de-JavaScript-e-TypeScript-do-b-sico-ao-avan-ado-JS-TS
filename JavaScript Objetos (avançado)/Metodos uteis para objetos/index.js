// Object.values
// Object.entries
// Object.assign(des,any)
// Object.getOwnPropertyDescriptor(o, 'prop')
// ...(spread)

// //Já vimos
// Object.keys(retorna as chaves)
// Object.freeze(Congela o objeto)
// Object.defineProperties(define varias propriedades)
// Object.defineProperty(define uma propriedade)

// const produto = { nome:'Caneca', preco:1.8};
// const outraCoisa = produto;

// outraCoisa.nome = 'Luiz Otávio';
// produto.nome = 'Luiz Otávio';
// console.log(outraCoisa);
// console.log(produto);

//desvincular o apontamento de produto de outracoisa
//e tornandos as duas constantes separada em valores
//porem utilizando o mesmo escopo de objeto
// const produto = { nome:'Caneca', preco:1.8};
// const outraCoisa ={...produto};

// outraCoisa.nome = 'Outro nome';
// outraCoisa.preco = 2.5;
// console.log(outraCoisa);
// console.log(produto);



// const produto = { nome:'Caneca', preco:1.8};
// const outraCoisa ={
//     ...produto,
//     meterial:'Porcelana'
// };

// outraCoisa.nome = 'Outro nome';
// outraCoisa.preco = 2.5;
// console.log(outraCoisa);
// console.log(produto);

// const produto = { nome:'Produto', preco:1.8};
// const caneca ={
//     ...produto,
//     meterial:'Porcelana'
// };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(outraCoisa);
// console.log(produto);

//faz a mesma coisa de copiar o padrão de objeto de produto e a unica coisa
//que muda e como vc pode add outro atributo do outro objeto que esta copiando o escopo de outro objeto
//Object.assign copia um objeto
// const produto = { nome:'Produto', preco:1.8};
// const caneca = Object.assign({},produto, {material:'Porcelana'});

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;

// console.log(produto);



// const produto = { nome:'Produto', preco:1.8};
// const caneca = {nome: produto.nome, preco: produto.preco};

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);


// const produto = { nome:'Produto', preco:1.8};
// //caso eu queira que um objeto não seja alterado eu utilizo o object.frezze
// Object.freeze(produto);
// //object.keys mostra as chaves do objeto
// const caneca = {nome: produto.nome, preco: produto.preco};
// console.log(Object.keys(produto));

// const produto = { nome:'Produto', preco:1.8};
// console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
//retorno
// {
//     value: 'Produto',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// const produto = { nome:'Produto', preco:1.8};
// Object.defineProperty(produto, 'nome', {
//     writable:false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
// produto.nome = 'Outra coisa';


// const produto = { nome:'Produto', preco:1.8};
// Object.defineProperty(produto, 'nome', {
//     writable:false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
// console.log(produto);


// const produto = { nome:'Produto', preco:1.8};
// console.log(Object.values(produto));
// //retorno
// // [ 'Produto', 1.8 ]

// const produto = { nome:'Produto', preco:1.8};
// console.log(Object.entries(produto));
// //retorno
// // [ [ 'nome', 'Produto' ], [ 'preco', 1.8 ] ]

// const produto = { nome:'Produto', preco:1.8, material:'Porcelana'};
// console.log(Object.entries(produto));
// //retorno
// [
//   [ 'nome', 'Produto' ],
//   [ 'preco', 1.8 ],
//   [ 'material', 'Porcelana' ]
// ]


// const produto = { nome:'Produto', preco:1.8, material:'Porcelana'};


// for(let entry of Object.entries(produto)){
//     console.log(entry);
    
// }
//retorno
// [ 'nome', 'Produto' ]
// [ 'preco', 1.8 ]
// [ 'material', 'Porcelana' ]


// const produto = { nome:'Produto', preco:1.8, material:'Porcelana'};


// for(let [chave, valor] of Object.entries(produto)){
//     console.log(chave, valor);
    
// }


const produto = { nome:'Produto', preco:1.8, material:'Porcelana'};


for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
    
}