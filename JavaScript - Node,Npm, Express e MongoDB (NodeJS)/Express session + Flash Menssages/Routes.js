const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


//Rotas da Home
route.get('/', homeController.paginaInicial);

// //Rotas da Home
// route.get('/', meuMiddleware, homeController.paginaInicial, function(req,res,next){
//     console.log();
//     console.log('Ainda estou aqui');
//     console.log(`'Ultimo middleware'Olha o que tem na req.session.nome ${req.session.nome}`);
    
// });
route.post('/', homeController.trataPost);


// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;