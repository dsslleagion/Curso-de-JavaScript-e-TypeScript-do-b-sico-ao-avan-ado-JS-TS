// try{
//     console.log(naoExiste);
// } catch(err){
//     console.log('NãoExisto não existe');
// }

// try{
//     console.log(naoExiste);
// } catch(err){
//     console.log('NãoExisto não existe');
//     console.log(err);
// }

// function soma (x, y){
//     if(typeof x !== 'number' || 
//     typeof y !== 'number'){
//         throw('x e y precisam ser numeros ')
//     }
//     return x + y;

// }
// console.log(soma(1, 1));
// console.log(soma(1, "n"));


// function soma (x, y){
//     if(typeof x !== 'number' || 
//     typeof y !== 'number'){
//         throw new Error('x e y precisam ser numeros ')
//     }
//     return x + y;

// }
// try{
// console.log(soma(1, 1));
// console.log(soma(1, "n"));
// }catch(error){
//     console.log(error);
// }
// function soma (x, y){
//     if(typeof x !== 'number' || 
//     typeof y !== 'number'){
//         throw new ReferenceError('x e y precisam ser numeros ')
//     }
//     return x + y;

// }
// try{
// console.log(soma(1, 1));
// console.log(soma(1, "n"));
// }catch(error){
//     console.log(error);
// }
function soma (x, y){
    if(typeof x !== 'number' || 
    typeof y !== 'number'){
        throw new TypeError('x e y precisam ser numeros ')
    }
    return x + y;

}
try{
console.log(soma(1, 1));
console.log(soma(1, "n"));
}catch(error){
    console.log(error);
}