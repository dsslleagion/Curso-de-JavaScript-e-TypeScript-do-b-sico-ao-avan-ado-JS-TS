const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector('.tarefa');

function criaLi() {
    const li = document.createElement('li');
    return li;
}


// inputTarefa.addEventListener('keypress');
// inputTarefa.addEventListener('keyup');
// inputTarefa.addEventListener('keydown');

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
    
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
}

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});
