const a1 = [1,2,3];
const a2 = [4,5,6];
// const a3 = a1 + a2;
// console.log(a3); metodo errado

// para concatenar basta 

// const a3 = a1.concat(a2);
// console.log(a3);

// const a3 = a1.concat(a2, [7,8,9], 'Dionisio');
// console.log(a3);

// outro metodo de concatenar 

//... rest (tambem pode concatenar ) ele é usado para pegar o resto do array e jogando ele em alguma outra coisa 
// no contexto de concatenação ele é chamado de spread para concatenar

const a3 = [...a1,'Dionisio',...a2,...[7,8,9]];// funciona tanto para array tanto para objeto

console.log(a3);



