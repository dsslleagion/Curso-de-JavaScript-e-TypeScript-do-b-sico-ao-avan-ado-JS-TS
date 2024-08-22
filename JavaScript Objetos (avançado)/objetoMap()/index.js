//estrutura de dados 

const pessoas = [
 {id: 3, nome: 'Luiz'},
 {id: 2, nome: 'Dionisio'},
 {id: 1, nome: 'Pablo'},
];

//objetivo era pegar o id e jogar dentro de um {}
// const novasPessoas  = {};


//objetivo: jogar id e nome na chave do objeto vazio NovasPessoas
//desestruturação
// for(const {id,nome} of  pessoas){
//     console.log(id, nome);
    
// }


//aplicação da resolução

// for(const {id,nome} of  pessoas){
//     novasPessoas[id] = {id,nome};
// }

//agora se quisse id separado

// for(const pessoa of  pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }
// console.log(novasPessoas);


//depois da resolução é necessario observar que há porens
//saida
// {
//     '1': { id: 1, nome: 'Pablo' },
//     '2': { id: 2, nome: 'Dionisio' },
//     '3': { id: 3, nome: 'Luiz' }
//   }
// primeiro: no objeto chave só pode ser um string e um object symbol
// e como é possivel observar as chaves viraram string
// Segundo; a ordem foi alterada do objeto e seus registros 
// porque o javascript ordena string de modo crescente
//logo se fez necessario usar o .map para arrumar a estruturação


//aplicação da solução

const novasPessoas = new Map();
for(const pessoa of  pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
// console.log(novasPessoas);

// saida 
// Map(3) {
//     3 => { id: 3, nome: 'Luiz' },
//     2 => { id: 2, nome: 'Dionisio' },
//     1 => { id: 1, nome: 'Pablo' }
//   }

// vale ressaltar que a ordem se manteve da listagem do objeto


// muda pouca coisa comparando com codigos anteriores 
// apenas muda para criar e obter os valores

//obtendo pessoa 2
// console.log(novasPessoas.get(2));

//iterando o mapa

// for(const [identifier, {id,nome}]of novasPessoas){
//     console.log(identifier);
// };

// pegando apenas a chaves

// for(const pessoas of novasPessoas.keys()){
//     console.log(pessoas);
// };

// pegando apenas os valores 
// for(const pessoas of novasPessoas.values()){
//     console.log(pessoas);
// };

//excluindo pessoas
novasPessoas.delete(2);
console.log(novasPessoas);
