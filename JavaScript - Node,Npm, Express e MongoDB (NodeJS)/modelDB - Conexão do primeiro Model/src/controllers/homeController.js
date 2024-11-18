const HomeModel = require('../models/HomeModel');
//criar registro
// HomeModel.create({
// titulo: 'Um titulo de testes',
// descricao: 'Uma descrição de testes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

//procurar
    HomeModel.find()
            .then(dados => console.log(dados))
            .catch(e => console.log(e));
        
//next utilizado é para indicar que dps de req ou res executa o next (proximo)
exports.paginaInicial = (req,res, next) =>{
    console.log('respondendo cliente');   
        res.render('index');
        next();
};

exports.trataPost = (req,res)=>{
res.send(req.body);
return;
};

