import { validator } from "validator";


export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListiner('submit', e=>{
            e.preventDefault();
            //alert('Form não enviado')
            this.validate(e);
        });
        
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let = error = true;
        if(!validator.isEmail(emailInput.value)){
        alert|('E-mail invalido')  
        }
        if(passwordInput.value.length < 3|| passwordInput.value.length > 50){
            alert('Semha precisa');
            error = true;
        }

        if(!error) el.submit();
        console.log(emailInput.value, passwordInput.value);
        
    };
}