// fetch('pessoas.json')
// .then(resposta => resposta.json()) // pegou a resposta e converteu para json e retorna uma nova promise 
// .then(json => console.log(json)); // pegou a nova proimise e em seguida o json é retornado para a função desejada 

//mandando para função
// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

// function carregaElementosNaPagina(json) {
//     const table = document.createElement('table'); // cria tabela


//     for (let pessoa of json) {
//         //para cada objeto do array uma iteração é realizada 
//         const tr = document.createElement('tr'); // criação de linha 

//         let td1 = document.createElement('td'); // criação de um td para pegar um atributo dos objetos retornados do json
//         td1.innerHTML = pessoa.nome;//inserindo ao elemento os dados do atributo do json como ex. nome
//         tr.appendChild(td1);

//         let td2 = document.createElement('td');
//         td2.innerHTML = pessoa.idade;
//         tr.appendChild(td2);

//         let td3 = document.createElement('td');
//         td3.innerHTML = pessoa.salario;
//         tr.appendChild(td3);

//         table.appendChild(tr);//add a linha na tabela

//     }
//     const resultado = document.querySelector('.resultado');
//     resultado.appendChild(table);

// }


//agora implementando usar axios

axios('pessoas.json')
.then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table'); // cria tabela


    for (let pessoa of json) {
        //para cada objeto do array uma iteração é realizada 
        const tr = document.createElement('tr'); // criação de linha 

        let td1 = document.createElement('td'); // criação de um td para pegar um atributo dos objetos retornados do json
        td1.innerHTML = pessoa.nome;//inserindo ao elemento os dados do atributo do json como ex. nome
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);


        table.appendChild(tr);//add a linha na tabela

    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);

}