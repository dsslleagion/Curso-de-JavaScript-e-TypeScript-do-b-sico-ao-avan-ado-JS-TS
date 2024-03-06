const relogio = document.querySelector('.relogio');
const pausar = document.querySelector('.pausar');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');


iniciar.addEventListener('click', function (event){
    relogio.innerHTML = 'Cliquei no iniciar'
});
pausar.addEventListener('click',function(event){
    alert('Cliquei no pausar');
});
zerar.addEventListener('click',function(event){
    alert('Cliquei no zerar');
});