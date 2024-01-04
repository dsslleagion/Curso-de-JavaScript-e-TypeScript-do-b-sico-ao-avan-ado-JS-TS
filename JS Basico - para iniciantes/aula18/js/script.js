// let numero = prompt('Digite um Número:');
// numero = Number(numero); //converteu a entrada string para numero 

// const numero = Number(prompt('Digite um Número: ')); //conversão direta de string para number

// const numeroTitulo = document.getElementById('numero-titulo'); // pegou os valores dentro no html pelo id
// const texto = document.getElementById('texto');

// numeroTitulo.innerHTML = numero;// retorno na pagina
// texto.innerHTML = `<p>Seu numero  + 2 é ${numero + 2}.</p>`;

// const numero = Number(prompt('Digite um Número: '));

// const numeroTitulo = document.getElementById('numero-titulo');
// const texto = document.getElementById('texto');

// Solução do chat
// numeroTitulo.innerHTML = numero;

// if (!isNaN(numero)) {
//     texto.innerHTML = `
//         <p>Raiz quadrada: ${Math.sqrt(numero)}</p>
//         <p>É inteiro: ${Number.isInteger(numero)}</p>
//         <p>É NaN: ${isNaN(numero)}</p>
//         <p>Arredondamento para baixo: ${Math.floor(numero)}</p>
//         <p>Arredondamento para cima: ${Math.ceil(numero)}</p>
//         <p>Com duas casas decimais: ${numero.toFixed(2)}</p>
//     `;
// } else {
//     texto.innerHTML = '<p>O valor não é um número válido.</p>';
// }


// Solução aula

const numero = Number(prompt('Digite um Número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;// retorno na pagina
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} inteiro:${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando Para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando Para Cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com Duas Casas Decimais: ${numero.toFixed(2)}.</p>`;