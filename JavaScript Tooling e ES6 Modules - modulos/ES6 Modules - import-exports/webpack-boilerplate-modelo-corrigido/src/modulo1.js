const nome = 'DIonisio Samuel';
const sobrenome = 'Santos Leão';
export const idade = 22;

export {nome, sobrenome, idade};
export{nome as outroNome, sobrenome as outroSobrenome};

export function teste(){
    console.log('Teste');
}


function soma(x,y){
    return x + y;
}
export{soma};

export class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }
}

const p1 = new Pessoa("Dionisio", "SamuelNocontructor");

//exportações default
export default (a,b) => a + b;

//export default function () {} // tambem class, function*
//export default function funcao(){} // tambem class, function*
//export { name1 as default};

