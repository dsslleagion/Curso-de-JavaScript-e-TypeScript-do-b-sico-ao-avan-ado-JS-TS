const express = require('express');
const app = express();
//        Criar   ler   atualizar apagar
//CRUD -> CREATE, READ, UPDATE, DELETE
//        POST     GET  PUT     DELETE


//http://meusite.com/ <- GET -> Entregar a pagina/
//http://meusite.com/ <- GET -> Entregar a pagina/ sobre
//http://meusite.com/ <- GET -> Entregar a pagina/ contato

// app.get('/',(req,res) =>{
//     res.send('hello world');
// });

// app.get('/',(req,res) =>{
//     res.send('
//         <form action="/" method="POST">
//             Nome: <input type="text" name="nome"></input>
//             <button>Enviar</button>
//         </form>
//         ');
// });

app.post('/', (req, res) =>{
    res.send('Recebi o formulario')
});
// uma porta é um processo sendo executada nela 
app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato com agente')
});
app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
    
});
