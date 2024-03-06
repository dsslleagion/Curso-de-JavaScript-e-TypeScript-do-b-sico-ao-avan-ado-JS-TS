// new date(0);
function relogio(){
    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('Pt-Br',{
            hour12: false,
            timeZone:'GMT'
        });
    }
    console.log(criaHoraDosSegundos(10));
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;


let timer;

function iniciaRelogio(){
     timer = setInterval(() => {
       segundos++;
       relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}
document.addEventListener('click', function(e){
    const el = e.target;
    console.log(el);

    if(el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer)
        iniciaRelogio();

    }
    
    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer)
        
    }
});
}
relogio();

// function criaHoraDosSegundos(segundos){
//     const data = new Date(segundos * 1000);
//     return data.toLocaleTimeString('Pt-Br',{
//         hour12: false,
//         timeZone:'GMT'
//     });
// }
// console.log(criaHoraDosSegundos(10));

// const relogio = document.querySelector('.relogio');
// // const pausar = document.querySelector('.pausar');
// // const iniciar = document.querySelector('.iniciar');
// // const zerar = document.querySelector('.zerar');
// let segundos = 0;


// let timer;

// function iniciaRelogio(){
//      timer = setInterval(() => {
//        segundos++;
//        relogio.innerHTML = criaHoraDosSegundos(segundos);
//     }, 1000);
// }
// document.addEventListener('click', function(e){
//     const el = e.target;
//     console.log(el);

//     if(el.classList.contains('zerar')){
//         clearInterval(timer);
//         relogio.innerHTML = '00:00:00';
//         segundos = 0;
//     }

//     if(el.classList.contains('iniciar')){
//         relogio.classList.remove('pausado');
//         clearInterval(timer)
//         iniciaRelogio();

//     }
    
//     if(el.classList.contains('pausar')){
//         relogio.classList.add('pausado');
//         clearInterval(timer)
        
//     }
// });
// iniciar.addEventListener('click', function (event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     iniciaRelogio();
// });
// pausar.addEventListener('click',function(event){
//     clearInterval(timer)   
//     relogio.classList.add('pausado');
// });
// zerar.addEventListener('click',function(event){
//     clearInterval(timer);
//     relogio.innerHTML = '00:00.00';
//     segundos = 0;
// });





















































// let segundos = 0;

// function exibirTempo(){

// try {
//     segundos++;

//     let horas = Math.floor(segundos/ 3600);
//     let minutos = Math.floor((segundos/ 3600)/ 60);
//     let seg = segundos % 60;

//     let tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padEnd(2,'0')}:${seg.toString().padEnd(2,'0')}`
//     console.log(tempoFormatado);
    
//     let timer = setInterval(exibirTempo, 1000);

//     setTimeout(() =>{
//         clearInterval(timer);
//         console.log('Timer encerrado');
//     }, 10000);
// } catch (error) {
//  console.log(error);   
// }

// }

// exibirTempo()