const Contato = require('../models/ContatoModel');

exports.index = (req,  res) =>{
res.render('contato', {
    contato: {}
});
};

exports.register = async function (req,  res) {
    try {
    const contato = new Contato(req.body);
    await contato.register();
    
    if (contato.errors.length > 0) { // Corrigido para contato.errors
        req.flash('errors', contato.errors);
        req.session.save(function () {
            const referrer = req.get('Referrer') || '/contato/index';
            return res.redirect(referrer);
        });
        return;
    }

    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(function () {
        const referrer = req.get('Referrer') || `/contato/index/${contato.contato._id}`;
        return res.redirect(referrer);
    });
} catch (error) {
    console.error(error);
    return res.render('404');
}
}

exports.editIndex = async function(req,res){
    if(!req.params.id) return res.render('404');
    const contato = await Contato.buscaPorId(req.params.id);
    if(!contato) return res.render('404');
    res.render('contato', {contato});
}

exports.edit = async function(req,res){
    try {
       
    if(!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if (contato.errors.length > 0) { // Corrigido para contato.errors
        req.flash('errors', contato.errors);
        req.session.save(function () {
            const referrer = req.get('Referrer') || '/contato/index';
            return res.redirect(referrer);
        });
        return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(function () {
        const referrer = req.get('Referrer') || `/contato/index/${contato.contato._id}`;
        return res.redirect(referrer);
    }); 
    } catch (error) {
        console.log(error);
    }


};

exports.delete = async function(req, res){
    if(!req.params.id) return res.render('404');
    const contato = await Contato.delete(req.params.id);
    if(!contato) return res.render('404');
    req.flash('success', 'Contato excluido com sucesso.');
    req.session.save(function () {
        const referrer = req.get('Referrer') || `/`;
        return res.redirect(referrer);
    }); 
};