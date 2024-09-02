// function rand(min,max){
//     min*=1000;
//     max*=1000;
//     return Math.floor(Math.random() * (max - min)+ min);
// }
// function esperaAi(msg,tempo){
//     return new Promise ((resolve,reject)=>{
//         if(typeof msg !== 'string')reject(new Error('ERRO'))
//         setTimeout(()=>{
//             resolve(msg);
//         },tempo);
//     });
   
    
// }


// //Promise.all Promise.race Promise.resolve Promise.reject

// //Promise.all
// // passar um array com promessas ou valores ja resolvidos 
// const promises = ['Primeiro valor','segundo valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     'Outro valor'
// ];

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
    
// })
// .catch(function(erro){
//     console.log(erro);
    
// });

// function rand(min,max){
//     min*=1000;
//     max*=1000;
//     return Math.floor(Math.random() * (max - min)+ min);
// }
// function esperaAi(msg,tempo){
//     return new Promise ((resolve,reject)=>{
//         if(typeof msg !== 'string')reject(new Error('ERRO'))
//         setTimeout(()=>{
//             resolve(msg.toUpperCase() + " Passei na Promise");
//         },tempo);
//     });
   
    
// }


// //Promise.all Promise.race Promise.resolve Promise.reject

// // //Promise.all
// // // passar um array com promessas ou valores ja resolvidos 
// const promises = ['Primeiro valor','segundo valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000),
//     'Outro valor'
// ];

// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
    
// })
// .catch(function(erro){
//     console.log(erro);
    
// });

//function rand(min,max){
    //     min*=1000;
    //     max*=1000;
    //     return Math.floor(Math.random() * (max - min)+ min);
    // }
    // function esperaAi(msg,tempo){
    //     return new Promise ((resolve,reject)=>{
    //         if(typeof msg !== 'string') {
    //             reject('cai no erro');
    //             return
    //         }
    
    //         setTimeout(()=>{
    //             resolve(msg.toUpperCase() + " Passei na Promise");
    //             return;
    //         },tempo);
    //     });
       
        
    // }
    
    
    // //Promise.all Promise.race Promise.resolve Promise.reject
    
    // // //Promise.all
    // // // passar um array com promessas ou valores ja resolvidos 
    // const promises = ['Primeiro valor','segundo valor',
    //     esperaAi('Promise 1', 3000),
    //     esperaAi('Promise 2', 500),
    //     esperaAi('Promise 3', 1000),
    //     esperaAi(1000, 1000),
    //     'Outro valor'
    // ];
    
    // Promise.all(promises)
    // .then(function(valor){
    //     console.log(valor);
        
    // })
    // .catch(function(erro){
    //     console.log(erro);
        
    // });

//Promise.race
// a primeira promise resolvida você me entrega o valor

// function rand(min,max){
//         min*=1000;
//         max*=1000;
//         return Math.floor(Math.random() * (max - min)+ min);
//     }
//     function esperaAi(msg,tempo){
//         return new Promise ((resolve,reject)=>{
          
//             setTimeout(()=>{
//                 if(typeof msg !== 'string') {
//                     reject('cai no erro');
//                     return
//                 }
        
//                 resolve(msg.toUpperCase() + " Passei na Promise");
//                 return;
//             },tempo);
//         });
       
        
//     }
    
//     function baixPagina() {
//         const emCache = true;
//         if(emCache){
//             return Promise.resolve('Pagina em cache');
//         }else{
//             return esperaAi('Baixei a pagina',3000);
//         }
//     }

//     baixPagina()
//     .then(dadosPagina=>{
//         console.log(dadosPagina);
        
//     })
//     .catch(e => console.log(e));
    
//     //Promise.all Promise.race Promise.resolve Promise.reject
//     const promises = [
//         esperaAi('Promise 1', rand(1,5)),
//         esperaAi('Promise 2', rand(1,5)),
//         esperaAi('Promise 3', rand(1,5)),
//         //esperaAi(1000,rand(1,5)),//verificando como funciona o erro
        
//     ];
    
//     Promise.race(promises)
//     .then(function(valor){
//         console.log(valor);
        
//     })
//     .catch(function(erro){
//         console.log(erro);
        
//     });


    // Promise.resolve

    // function rand(min,max){
    //     min*=1000;
    //     max*=1000;
    //     return Math.floor(Math.random() * (max - min)+ min);
    // }
    // function esperaAi(msg,tempo){
    //     return new Promise ((resolve,reject)=>{
          
    //         setTimeout(()=>{
    //             if(typeof msg !== 'string') {
    //                 reject('cai no erro');
    //                 return
    //             }
        
    //             resolve(msg.toUpperCase() + " Passei na Promise");
    //             return;
    //         },tempo);
    //     });
       
        
    // }
    
    // function baixPagina() {
    //     const emCache = true;
    //     if(emCache){
    //         return Promise.resolve('Pagina em cache');
    //     }else{
    //         return esperaAi('Baixei a pagina',3000);
    //     }
    // }

    // baixPagina()
    // .then(dadosPagina=>{
    //     console.log(dadosPagina);
        
    // })
    // .catch(e => console.log(e));
    
    //promise.reject

    function rand(min,max){
        min*=1000;
        max*=1000;
        return Math.floor(Math.random() * (max - min)+ min);
    }
    function esperaAi(msg,tempo){
        return new Promise ((resolve,reject)=>{
          
            setTimeout(()=>{
                if(typeof msg !== 'string') {
                    reject('cai no erro');
                    return
                }
        
                resolve(msg.toUpperCase() + " Passei na Promise");
                return;
            },tempo);
        });
       
        
    }
    
    function baixPagina() {
        const emCache = true;
        if(emCache){
            return Promise.reject('Pagina em cache');
        }else{
            return esperaAi('Baixei a pagina',3000);
        }
    }

    baixPagina()
    .then(dadosPagina=>{
        console.log(dadosPagina);
        
    })
    .catch(e => console.log("ERRO",e));