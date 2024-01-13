// const data = new Date('1987-04-21 00:00:00');
// const diaSemana = data.getDay();
// let diaSemanaTexto;


// if (diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana == 1){
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana == 2){
//     diaSemanaTexto = 'terça';
// } else if (diaSemana == 3){
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana == 4){
//     diaSemanaTexto = 'Quinta';
// }else if (diaSemana == 5){
//     diaSemanaTexto = 'Sexta';
// }else if (diaSemana == 6){
//     diaSemanaTexto = 'Sabado';
// } else {
//     diaSemanaTexto = 'ta invalido irmão';
// }

// function getDiaSemanaTexto (){

// }

// const data = new Date('1987-04-26 00:00:00');
// let diaSemana = data.getDay();
// let diaSemanaTexto;

// switch (diaSemana) { //dentro do parenteses coloca as variaveis q seram utilizadas
//     case 0: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'Domingo'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 1: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'segunda'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 2: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'terça'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 3: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'quarta'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 4: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'quinta'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 5: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'sexta'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 6: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'sabado'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//         default:
//             diaSemanaTexto = 'ta errado irmão';
//             break;

// }

// function getDiaSemanaTexto (diaSemana){
//     let diaSemanaTexto;
//     switch (diaSemana) { //dentro do parenteses coloca as variaveis q seram utilizadas
//     case 0: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'Domingo'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 1: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'segunda'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 2: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'terça'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 3: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'quarta'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 4: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'quinta'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 5: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'sexta'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//     case 6: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
//         diaSemanaTexto = 'sabado'; // exibe o resultado se for verdadeiro
//         break; // para o bloco de codigo
//         default:
//             diaSemanaTexto = 'ta errado irmão';
//             break;

// }

// return diaSemanaTexto;
// }

function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;
    switch (diaSemana) { //dentro do parenteses coloca as variaveis q seram utilizadas
    case 0: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
        diaSemanaTexto = 'Domingo'; // exibe o resultado se for verdadeiro
        return diaSemanaTexto; // para o bloco de codigo
    case 1: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
        diaSemanaTexto = 'segunda'; // exibe o resultado se for verdadeiro
        return diaSemanaTexto; // para o bloco de codigo
    case 2: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
        diaSemanaTexto = 'terça'; // exibe o resultado se for verdadeiro
        return diaSemanaTexto; // para o bloco de codigo
    case 3: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
        diaSemanaTexto = 'quarta'; // exibe o resultado se for verdadeiro
        return diaSemanaTexto; // para o bloco de codigo
    case 4: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
        diaSemanaTexto = 'quinta'; // exibe o resultado se for verdadeiro
        return diaSemanaTexto; // para o bloco de codigo
    case 5: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
        diaSemanaTexto = 'sexta'; // exibe o resultado se for verdadeiro
        return diaSemanaTexto; // para o bloco de codigo
    case 6: // o case analisa se a condição atender o valor , comparado ao (diaSemana === 0)
        diaSemanaTexto = 'sabado'; // exibe o resultado se for verdadeiro
        return diaSemanaTexto; // para o bloco de codigo
        default:
            diaSemanaTexto = 'ta errado irmão';
            break;

}

return diaSemanaTexto;
}

const data = new Date('1987-04-24 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);


console.log(diaSemana, diaSemanaTexto);