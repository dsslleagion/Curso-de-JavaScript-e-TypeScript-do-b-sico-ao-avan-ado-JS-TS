//Capturar evento de submit do formulario
const form = document.querySelector('#form'); // captura do formulario

form.addEventListener('submit', function(e){ //adicionou um escutador de evento 
  e.preventDefault(); // evita que o evento seja enviado
  const inputPeso = e.target.querySelector('#peso'); // captura dos dados de cada campo peso e altura
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value); // conversão de texto para number dos dados dos inputs
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso invalido', false); // verifica se o peso for avaliado como verdadeiro ele set o resultado caso contrario exiba que ele é invalido
    return;
  }

  if(!altura){
    setResultado('Altura invalida', false);
    return;
  }

  const imc = getImc(peso, altura); // função especifica para calcular o IMC

  const nivelImc = getNivelImc(imc); // pegou o nivel do imc

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; //mensagem com os valores

  setResultado(msg, true); // setando o resultado com a flag true

});

function getNivelImc (imc) { // baseado no imc retornar o indice corespondente ao nivel de imc do valor calculado e exibir uma daas string do array
  
  const nivel = ['Abaixo do Peso','Peso Normal','Sobre Peso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

  if(imc >= 39.9) return nivel[5];
  if(imc >= 34.9) return nivel[4];// as verificações de qual strings usar com base no imc
  if(imc >= 29.9) return nivel[3];
  if(imc >= 24.9) return nivel[2];
  if(imc >= 18.5) return nivel[1];
  if(imc < 18.5) return nivel[0];
  
}
function getImc (peso, altura) { // calculo imc
  const imc = peso / altura ** 2;
  return imc.toFixed(2); // to fixed para retornar 2 casas depois do decimal

}
function criaP () { // função que cria paragrafo 
  const p = document.createElement('p');
 return p;
}

function setResultado(msg, isValid){ // função de setamento do resultado
  const resultado = document.querySelector('#resultado');// pega o valor da tag html aonde o id é resultado
  resultado.innerHTML = ''; // esvazia o html
  const p = criaP();// cria um paragrafo
  if (isValid) {
    p.classList.add('paragrafo-resultado'); // se o resultado foir valido exibir o resultado e da estilização do css paragrado-resultado
  } else {
    p.classList.add('bad');// caso contrario exibe a estilização vermelha com a mensagem de invalida
  }
  p.innerHTML = msg;// seta a mensagem para exibir
  resultado.appendChild(p); // adiciona o paragrafo no resultado
}



