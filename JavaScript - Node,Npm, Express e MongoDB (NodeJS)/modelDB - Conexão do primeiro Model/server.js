require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const connectionString = CONNECTIONSTRING;
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Conexão a Base de Dados realizada com sucesso!');
        app.emit('pronto');

    })
    .catch(e => console.log(e));
    
const routes = require('./Routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware} = require('./src/middlewares/middleware')

app.use(
    express.urlencoded({
        extended: true
    })
);

// app.use(express.static('./public'))
app.use(express.static(path.resolve(__dirname, './public')));

//caminho absoluto a views
app.set('views', path.resolve(__dirname, 'src','views'));
//exemplo de caminho relativo
//app.set('views','./src/views');

app.set('view engine', 'ejs');
// nossos próprios middlewares
app.use(middlewareGlobal);
// app.use(outroMiddleware);
app.use(routes);

app.on('pronto', ()=>{

    app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
    
});})

