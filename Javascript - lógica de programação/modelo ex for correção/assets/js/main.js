const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'section', texto: 'frase 3' },
    { tag: 'footer', texto: 'frase 4' },
];


const container = document.querySelector('.conteiner');// chama a primeiro classe chamada
const div = document.createElement('div');
// agora executar iteração ('percorrer o array') usando o for

for (lei i = 0; i < elementos.length; i++) {
   let { tag, texto} = elementos[i];
   let tagCriada = document.createElement(tag);
//    tagCriada.innerHTML = texto;
//    tagCriada.innerText = texto;
   let textoCriado = document.createTextNode(texto);

   tagCriada.appendChild(textoCriado);
   div.appendChild(tagCriada);
} 

container.appendchild(div);
