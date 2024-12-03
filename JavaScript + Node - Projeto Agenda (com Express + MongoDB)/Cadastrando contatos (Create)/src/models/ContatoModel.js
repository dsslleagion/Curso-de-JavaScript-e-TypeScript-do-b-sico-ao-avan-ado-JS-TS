const mongoose = require('mongoose');
const validator = require('validator');

const contatoSchema = new mongoose.Schema({
    
    nome: {type: String,require: true},
    sobrenome: {type: String,require: false, default: ''},
    email: {type: String,require: true, default: ''},
    telefone: {type: String,require: true,  default: ''},
    createdAt: {type: Date, default: Date.now}
});

const ContatoModel = mongoose.model('Contatos', contatoSchema);

function Contato(body){
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.buscaPorId = async function(id){
    if(typeof id !== 'string') return;
 const user = await ContatoModel.findById(id);
 return user;
}

Contato.prototype.register = async function(){
    this.valida();

    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function (){
    //validação
    //O email precisa ser válido
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório');
    if(!this.body.email && !this.body.telefone){
        this.errors.push('Pelo menos um contato deve ser enviado: Email ou Telefone.');
    } 
    this.cleanUp();
}

//percorre pelas chaves do body para validar se todos os dados são Strings
Contato.prototype.cleanUp = function(){
    for(let key in this.body){
       if( typeof this.body[key] !== 'string'){
        this.body[key] = '';
       }
    }
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
        
    }
}

module.exports = Contato;