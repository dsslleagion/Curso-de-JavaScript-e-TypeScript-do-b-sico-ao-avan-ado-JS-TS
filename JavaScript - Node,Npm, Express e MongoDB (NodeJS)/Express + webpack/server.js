const express = require('express');
const app = express();
const routes = require('./Routes');
const path = require('path');

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
app.use(routes);

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
    
});
