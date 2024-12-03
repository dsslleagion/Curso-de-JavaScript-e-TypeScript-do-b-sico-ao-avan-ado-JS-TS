const Login = require('../models/LoginModel.js')

exports.index = (req,res) =>{
    if(req.session.user) return res.render('login-logado');
    res.render('login');
};

exports.register = async function(req,res){
    try{
        const login = new Login(req.body);
        await login.register();

    if(login.errors.length> 0){
        req.flash('errors', login.errors);
        req.session.save(function(){
            const referrer = req.get('Referrer') || '/login/index';
            return res.redirect(referrer);
        });
        return;
    }
    req.flash('success', "Seu usuário foi criado com sucesso.");
    req.session.save(() => {
        const referrer = req.get('Referrer') || '/login/index';
        return res.redirect(referrer);
    });
    }catch(e){
        console.log(e);
        
        res.render('404');        
    }
    
};

exports.login = async function(req,res){
    try{
        const login = new Login(req.body);
        await login.login();

    if(login.errors.length> 0){
        req.flash('errors', login.errors);
        req.session.save(function(){
            const referrer = req.get('Referrer') || '/login/index';
            return res.redirect(referrer);
        });
        return;
    }
    
    req.flash('success', "Seu usuário foi logado com sucesso.");
    req.session.user = login.user;
    req.session.save(() => {
        const referrer = req.get('Referrer') || '/login/index';
        return res.redirect(referrer);
    });
    }catch(e){
        console.log(e);
        
        res.render('404');        
    }
    
};

exports.logout = function(req , res){
    req.session.destroy();
    const referrer = req.get('Referrer') || '/';
    return res.redirect(referrer);
}