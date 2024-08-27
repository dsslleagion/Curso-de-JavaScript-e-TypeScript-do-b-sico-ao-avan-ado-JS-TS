//metodos estaticos são quando possiveis ser acessadas
//sem necessitar instanciar com o "new" a algum metodo
// e tambem não estaram disponiveis dentro da instancia

//metodos estaticos n tem acesso a informações da instancia
//metodo estatico é uma função que esta dentro de uma classe

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    // //metodo de instancia
    // trocaPilha(){
    //     //
    // }

    //metodo de instancia
    static trocaPilha(){
        //
        console.log('Ok, vou trocar');
        
    }

    //metodo de instancia
    static soma(x,y){
        //
        return x + y;
        
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

//modo errado de acessar um metodo estatico

//controle1.trocaPilha();
//correto 


ControleRemoto.trocaPilha();
console.log(controle1);
console.log(Math.random());


//exemplo desejado 

ControleRemoto.trocaPilha();

console.log(ControleRemoto.soma(2,4));

