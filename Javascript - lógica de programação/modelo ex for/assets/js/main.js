const elementos = [
    {tag:'h1', texto:'frase 1'},
    {tag:'h1', texto:'frase 2'},
    {tag:'h1', texto:'frase 3'},
    {tag:'h1', texto:'frase 4'},
];

0
// Função para criar elementos e adiciona-los ao DOM
function criarElementos() {
    const container = document.querySelector('.container'); // Seleciona a div com a classe 'container'
  
    elementos.forEach(elemento => {
        const novoElemento = document.createElement(elemento.tag); // cria um elemento com a tag especifica
        novoElemento.textContent = elemento.texto; // define o texto do elemento 
    
        container.appendChild(novoElemento); // adiciona o novo elemento ao container
    });
}

// chama a função para criar e adicionar elementos ao carregar a pagina
window.onload = criarElementos;