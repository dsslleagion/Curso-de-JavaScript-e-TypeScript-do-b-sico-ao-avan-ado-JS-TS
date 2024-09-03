function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('cai no erro');
                return
            }

            resolve(msg.toUpperCase() + " Passei na Promise");
            return;
        }, tempo);
    });


}

//forma da aula anterior de execução de ordem desejada de função
//sequencial
// esperaAi('Fase 1', rand())
// .then(valor =>{
//     console.log(valor);
//     return esperaAi('Fase 2 ', rand())
// })
// .then(fase=>{
//     console.log(fase);
//     return esperaAi('Fase 3', rand());    
// })
// .then(fase =>{
//     console.log(fase);
//     return fase 
// })
// .then(fase => {
//     console.log('Terminamos na fase: ',fase);

// })
// .catch(e=> console.log(e));

//forma async e await

// async function executa() {
//     const fase1 = await esperaAi('Fase 1', rand());
//     console.log(fase1);

//     const fase2 = await esperaAi('Fase 2', rand());
//     console.log(fase2);

//     const fase3 = await esperaAi('Fase 3', rand());
//     console.log(fase3);

//     console.log('Terminamos na fase:', fase3);

// } 
// executa();


// caso ocorra erro como o catch
//englobando num try catch o erro
// async function executa() {
//     try{ const fase1 = await esperaAi('Fase 1', rand());
//         console.log(fase1);

//         const fase2 = await esperaAi('Fase 2', rand());
//         console.log(fase2);

//         const fase3 = await esperaAi(2, rand());
//         console.log(fase3);

//         console.log('Terminamos na fase:', fase3);
//     }catch(e){
//         console.log(e);
//     }
// } 
// executa();

/// 3 estados async 

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', rand());// sem o await se tornou <pending>
        console.log(fase1);
        setTimeout(function () {
            console.log('Essa Promise estava pendente', fase1);

        }, 1100);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi(2, rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log(e);
    }
}
executa();

const teste2 = esperaAi('qlq',5000);
console.log(teste2);

// retorno
// Promise { <pending> }
// FASE 2 Passei na Promise
// Essa Promise estava pendente Promise { 'FASE 1 Passei na Promise' }
// cai no erro


//pending - > estado inicial pendente
//fullfilled - > estado de resolução 
// rejected -> rejeitada