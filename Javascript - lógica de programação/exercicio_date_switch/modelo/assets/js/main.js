function formatarData() {
    //Obter a data atual 
    let dataAtual = new Date();

    //Mapear o Número do dia da Semana para o nome correspondente
    let diaSemana;
    switch (dataAtual.getDay()) {
        case 0:
            diaSemana = "Domingo";
            break;
        case 1:
            diaSemana = "Segunda-feira";
            break;
        case 2:
            diaSemana = "Terça-feira";
            break;
        case 3:
            diaSemana = "Quarta-feira";
            break;
        case 4:
            diaSemana = "Quinta-feira";
            break;
        case 5:
            diaSemana = "Sexta-feira";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
    }

    // Obter o dia do mês, mês, ano, hora e minutos
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
    let ano = dataAtual.getFullYear();
    let hora = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();

    // Formatar o resultado
    let resultado = diaSemana + ", " + dia + " de " + obterNomeMes(mes) + " de " + ano + " " + hora + ":" + minutos;

    return resultado;

}

// Função para obter o nome do mês
function obterNomeMes(numeroMes) {
    let nomesMes = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    return nomesMes[numeroMes - 1];
  }

  // Exibir o resultado
// Obter o elemento do HTML pelo ID
let resultadoElemento = document.getElementById("resultado");

// Exibir o resultado no HTML
resultadoElemento.innerHTML = formatarData();