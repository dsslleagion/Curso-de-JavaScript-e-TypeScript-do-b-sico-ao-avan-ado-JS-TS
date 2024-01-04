// alert('SOCOOORRROOOO');
// tudo que acontece no navegador até mexer o mouse dentro dele é chamado de "evento"

// let nome = 'Dionisio'; // está de modo global

// function qualquer(){ // dentro dio bloco fica privado
//     return

// }

// const form = document.querySelector('#form');// por ID usa o #


    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('foi enviado');   garanti que a pagina do navegador n atualize antes do botão acionar
    // };

    // let contador = 1;
    // function recebeEventoForm (evento){
    //     evento.preventDefault();
    //     console.log(`Form não foi enviado ${contador}`);
    //     contador++;
    // }
    // //metodo mais moderno de fazer a mesma coisa 
    
    // form.addEventListener('submit', recebeEventoForm);

    function meuEscopo() {
        const form = document.querySelector('.form');
        const listaResultados = document.querySelector('.lista-resultados');
        const pessoas = [];
    
        function recebeEventoForm(evento) {
            evento.preventDefault();
    
            // Obter os valores dos campos do formulário
            const nome = form.querySelector('.nome').value;
            const sobrenome = form.querySelector('.sobrenome').value;
            const peso = form.querySelector('.peso').value;
            const altura = form.querySelector('.altura').value;
    
            // Criar um objeto pessoa com os valores corretos
            const pessoa = {
                nome: nome,
                sobrenome: sobrenome,
                peso: peso,
                altura: altura
            };
    
            // Adicionar a pessoa ao array
            pessoas.push(pessoa);
            console.log(pessoas);
            // Limpar a lista de resultados
            listaResultados.innerHTML = '';
    
            // Adicionar cada pessoa à lista de resultados
            pessoas.forEach((p) => {
                const itemLista = document.createElement('li');
                itemLista.textContent = `Nome: ${p.nome} ${p.sobrenome}, Peso: ${p.peso}, Altura: ${p.altura}`;
                listaResultados.appendChild(itemLista);
            });
        }
    
        form.addEventListener('submit', recebeEventoForm);
    }
    
    meuEscopo();
    