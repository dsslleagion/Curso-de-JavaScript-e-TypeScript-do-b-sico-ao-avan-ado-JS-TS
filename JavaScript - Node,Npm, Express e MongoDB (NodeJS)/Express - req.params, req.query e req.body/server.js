const express = require('express');
const app = express();


//para requisições post para realizar a manipulação do 
//body para execuções post deve se utilizar app.use

app.use(
    express.urlencoded({
        extended: true
    })
);

//tipo de parametro
// http://facebook.com/profiles/1
//app.get('/testes/:idUsuarios?/:parametro?',(req,res)=>{
    // console.log(req.params.idUsuarios);
    // res.send(req.params.parametro);
//outro tipo(query strings) par de chave e valor
//http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila
//http://facebook.com/profiles/12345?campanha=googleads

// app.get('/testes/:idUsuarios?/:parametro?',(req,res)=>{
//     console.log(req.query);
    
//     res.send(req.query);
// });
//


// ou seja
// req.params
// /profiles/3
// console.log(req.params);
// profiles/?chave1=valor1&chave2=valor2&valor3=3
// req.query
//console.log(req.query);
app.get('/',(req,res) =>{
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"></input>
            Outro Campo: <input type="text" name="aquioutrocampo"></input>
            <button>Enviar </button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?',(req,res)=>{
    // console.log(req.params.idUsuarios);
    // res.send(req.params.parametro);
    console.log(req.query);
    
    res.send(req.query);
});

app.post('/', (req, res) =>{
    console.log(req.body);
    
    res.send(`O que você me enviou foi: ${req.body.nome}`)
});
// uma porta é um processo sendo executada nela 
app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato com agente')
});
app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
    
});
