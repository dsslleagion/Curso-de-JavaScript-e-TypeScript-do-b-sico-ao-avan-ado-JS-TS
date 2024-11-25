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
        // req.session.usuario = {nome : 'Dionisio', logado:true}
        // console.log(req.session.usuario);
        // console.log(req.flash('error'), req.flash('sucess'), req.flash('info'));
        

        res.render('index',
                {
                        titulo: 'Este será o <span style="color:red;"> título </span> da pagina',
                        numeros: [0,1,2,3,4,5,6,7,8,9]

                }
        );
        next();
};

exports.trataPost = (req,res)=>{
res.send(req.body);
return;
};

