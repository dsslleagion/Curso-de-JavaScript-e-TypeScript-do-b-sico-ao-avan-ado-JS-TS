//next utilizado é para indicar que dps de req ou res executa o next (proximo)
exports.paginaInicial = (req,res, next) =>{
    console.log('respondendo cliente');   
        res.render('index');
       // console.log(`'PaginaInicial'Olha o que tem na req.session.nome ${req.session.nome}`);    
        //return;
        next();
};

exports.trataPost = (req,res)=>{
res.send(req.body);
return;
};

