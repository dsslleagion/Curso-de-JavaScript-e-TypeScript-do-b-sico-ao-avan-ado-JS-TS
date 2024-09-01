//promises garantem que uma função seja executada
//na ordem desejada parecida com funções callback,
// mas ainda n seria igual pq callback contruiria uma arvore
//de callback gigantesca que a promise veio para evitar ter a necessidade de contruir 
//funções que precisam ser usadaas em ordem


// //codigo assincrono 
// function rand(min,max){
//     min*=1000;
//     max*=1000;
//     return Math.floor(Math.random() * (max - min)+ min);
// }
// function esperaAi(msg,tempo){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(msg);
//         },tempo);
//     });
//     // resolve = executou com sucesso e vai resolver
//     //reject = erro e rejeita
    
// }
// esperaAi('Conexão com o BD', rand(1,3))
// .then(resposta => {
//     console.log(resposta);
//     return esperaAi('Buscando dados da Base', rand(1,3));
// })
// .then(resposta => {
//     console.log(resposta);
//     return esperaAi('Tratando os dados da BASE', rand(1,3));
// })
// .then(resposta =>{
//    console.log(resposta);
// }).then(() =>{
//     console.log('Exibe dados na tela');
// })
// .catch();


// console.log('exibido antes de qualquer um');


//codigo assincrono usando recject e resolve
// function rand(min,max){
//     min*=1000;
//     max*=1000;
//     return Math.floor(Math.random() * (max - min)+ min);
// }
// function esperaAi(msg,tempo){
//     return new Promise ((resolve,reject)=>{
//         if(typeof msg !== 'string')reject('BAD VALUE')
//         setTimeout(()=>{
//             resolve(msg);
//         },tempo);
//     });
//     // resolve = executou com sucesso e vai resolver
//     //reject = erro e rejeita
    
// }
// esperaAi('Conexão com o BD', rand(1,3))
// .then(resposta => {
//     console.log(resposta);
//     return esperaAi('Buscando dados da Base', rand(1,3));
// })
// .then(resposta => {
//     console.log(resposta);
//     return esperaAi(222222, rand(1,3));
// })
// .then(resposta =>{
//    console.log(resposta);
// }).then(() =>{
//     console.log('Exibe dados na tela');
// })
// .catch(e =>{
//     console.log('ERRO:', e);
    
// });

//codigo assincrono 
function rand(min,max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random() * (max - min)+ min);
}
function esperaAi(msg,tempo){
    return new Promise ((resolve,reject)=>{
        if(typeof msg !== 'string')reject(new Error('ERRO'))
        setTimeout(()=>{
            resolve(msg);
        },tempo);
    });
    // resolve = executou com sucesso e vai resolver
    //reject = erro e rejeita
    
}
esperaAi('Conexão com o BD', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base', rand(1,3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(222222, rand(1,3));
})
.then(resposta =>{
   console.log(resposta);
}).then(() =>{
    console.log('Exibe dados na tela');
})
.catch(e =>{
    console.log('ERRO:', e);
    
});
