// tanto funções construtoras quando as funçções fabrica constroem objetos
// função construtora ja retorna objeto
// na função construtora tem que mudar a convenção de escrever função, e iniciar seu nome com letra maiuscula
// contrutora -> Pessoa (new) 
// funções fabrica e funções construtoras são um molde para gerar novos objetos

// contrutora -> Pessoa (new)
// function Pessoa(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;

//     this.metodo = function(){
//         console.log(this.nome + 'tesde de metodo');
//     }
// }
// // a palavra "new" cria um objeto vazio 
// const p1 = new Pessoa('Dionisio', 'Samuel');
// const p2 = new Pessoa('Tales','Romario');

// console.log(p1.nome);
// console.log(p2.nome);
// p1.metodo();

function Pessoa(nome, sobrenome){
    //variaveis Privadas porque não estão disponiveis fora do corpo da função 
    // Atributos ou metdodos privados
    const ID = 123456
    const metodoInterno = function (){

    }

    // Atributos ou metdodos publicos
        this.nome = nome;
        this.sobrenome = sobrenome;
    
        this.metodo = function(){
            console.log(this.nome + ': tesde de metodo');
        }
    }
    // a palavra "new" cria um objeto vazio 
    const p1 = new Pessoa('Dionisio', 'Samuel');
    const p2 = new Pessoa('Tales','Romario');
    
    console.log(p1.nome);
    console.log(p2.nome);
    p1.metodo();