import  resolve from "core-js/fn/promise";

function promise(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('hey sou a promise');
            resolve();
        },2000);
    });
}

export default async function(){
    await promise();
    console.log('Terminou');
    
}