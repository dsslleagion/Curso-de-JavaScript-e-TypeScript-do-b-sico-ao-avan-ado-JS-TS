function mostraHora(){
    let data = new Date();

    // return data.toLocaleDateString('pt-Br',{
    // });

    return data.toLocaleTimeString('pt-Br',{
        hour12:false
    });
}

//setInterval = inicia o intervalo e configura o seu tempo de execução
// set
// setInterval(function(){
//     console.log(mostraHora());
// }, 1000);

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

// setTimeOut = executa o intervalo apenas uma vez e clearInterval = finaliza o intervalo criado pelo setInterval
setTimeout(function(){
    clearInterval(timer);
},10000);

setTimeout(function(){
    console.log('Olá mundo');
}, 5000);


console.log(mostraHora());