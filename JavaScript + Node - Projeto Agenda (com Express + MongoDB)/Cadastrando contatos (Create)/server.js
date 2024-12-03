require('dotenv').config(); // inicia o dotenv
const express = require('express'); //iniciou express
const app = express();//iniciou servidor express
const mongoose = require('mongoose'); // inicio dependencia de conecxão com mongodb
//conexão de banco 
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('Conexão a Base de Dados realizada com sucesso!');
        app.emit('pronto');

    })
    .catch(e => console.log(e));

const session = require('express-session'); //inicio de seção onde é possivel saber qual é o usuario da seção
const MongoStore = require('connect-mongo');//mongo store armazena as sessões ao mongodb
const flash = require('connect-flash'); //flash menssagers
const routes = require('./Routes'); // inicio de dependencia de rotas
const path = require('path'); // inicio de dependencia de path que identifica onde se localiza cada arquivo
const helmet = require('helmet'); // inicio de dependencia helmet que é responsavel por garante que dns seja localizado 
const csrf = require('csurf'); // criptografa para os formularios, evitando que sites externos possam postar algo no meu site
const { middlewareGlobal, csrfMiddleware, checkCsrfError} = require('./src/middlewares/middleware') // importação da middlewares e middlewares são funções no meio das rotas

app.use(helmet());//executa o helmet

//permissão para postar formularios dentro da aplicação
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json()); //add o cors a aplicação

//acesso aos arquivos estaticos que podem ser acessados diretamente 
app.use(express.static(path.resolve(__dirname, './public')));

//config de seção
const sessionOptions = session({
    secret: 'teste',
    store: new MongoStore({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000*60*60*24*7,
        httpOnly:true
    }
});
app.use(sessionOptions);//config de seção
app.use(flash());

//localização para acesso a arquivos renderizados a tela
app.set('views', path.resolve(__dirname, 'src','views'));
//motor grafico que renderiza as views
app.set('view engine', 'ejs');

app.use(csrf());//executa o csrf
app.use(middlewareGlobal);// executa a middleware
app.use(checkCsrfError);//outra middleware de csrf
app.use(csrfMiddleware);//outra middleware
app.use(routes); // executa rotas

//configura a execução da rota
app.on('pronto', ()=>{

    app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
    
});})

