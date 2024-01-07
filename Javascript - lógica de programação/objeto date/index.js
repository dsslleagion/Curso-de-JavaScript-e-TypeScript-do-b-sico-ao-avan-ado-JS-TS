// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// função date é uma função construtora
// sempre quando utilizar a palavra reservada "new" 
// estou utilizando uma função construtora
// e sempre com uma função construtora será iniciada seu nome com letra maiuscula
// const data = new Date(); 
// console.log(data);

// exibindo data no formato toString
// ele consverteu miléssimos de segundo para formato de data americana
// const data = new Date(); 
// console.log(data.toString());

// // data zerop 
// const data = new Date(0); // 01/01/1970 Timestamp unix ou epoca unix, marco zero
// console.log(data.toString());
// // ele exibirá 31/12/1969 por conta do fuso horario do brasil 

// // data zero com variavel de correção de fuso horario
// const tresHoras = 60* 60 * 3 * 1000;
// const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou epoca unix, marco zero
// console.log(data.toString());
// // ele exibirá 31/12/1969 por conta do fuso horario do brasil 


// add 1 dia 
// data zero com variavel de correção de fuso horario
// const tresHoras = 60* 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou epoca unix, marco zero
// console.log(data.toString());
// // ele exibirá 31/12/1969 por conta do fuso horario do brasil 
// // data formada por millesimos de segundos "Date(0 + tresHoras + umDia); "

// voltando ao dia 31 
// const tresHoras = 60* 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou epoca unix, marco zero
// console.log(data.toString());
// ele exibirá 31/12/1969 por conta do fuso horario do brasil 
// data formada por millesimos de segundos "Date(0 + tresHoras + umDia); "


// é possivel colocar a data, mes, ano, hora, minuto, segundo, milesegundo,
//se eu omitir os segundo ou millesegundos ou afins  ele vai zerar o relogio da casa 
// const data = new Date(2019, 3, 20,15,14,27,1000);
// console.log(data.toString());

// // meses são de 0-11 e minutos de 0 a 5
// // formato a,m,d,h,M,s,ms
// const data = new Date(2019, 3, 20,15,14,27,1000);
// console.log(data.toString());

//outro formato
// const data = new Date('2019-04-20 20:20:59');
// console.log(data.toString());
// outro formato 
// const data = new Date('2019-04-20 20:20:59.100');
// console.log(data.toString());


// const data = new Date('2019-04-20 20:20:59.100');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês começa do zero 
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); // 0 - Domingo e 6 é Sabado
// console.log(data.toString());
// console.log(Date.now());

// const data = new Date(1704633013670);
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês começa do zero 
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); // 0 - Domingo e 6 é Sabado
// console.log(data.toString());
// console.log(Date.now());

function zeroEsquerda (num){
    return num >= 10 ? num: `0${num}`
}
function formataData(data){
    // console.log(data);
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);// para tirar o mes 0
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);