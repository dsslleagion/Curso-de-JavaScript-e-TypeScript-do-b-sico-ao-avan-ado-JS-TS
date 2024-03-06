// try{
// // é executada quando não há erros
// }catch(e){
// // é executada quando há erros
// }finally{
//     //sempre
// }

// try{
//     console.log(a);
//     console.log('Abri um Arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     // é executada quando não há erros
//     }catch(e){
//         console.log('Tratando o Erro');
//     // é executada quando há erros
//     }finally{
//         console.log('Finally: sempre sou executado');
//         //sempre
//     }


// function retornaHora(data){
//     if(!(data instanceof Date)){
//         console.log('Não é');
//     }
// }
// // retornaHora(22);
// retornaHora(new Date());


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date");
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    });


}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log();
}catch(e){
    console.log(e);

}finally{
    console.log('Tenha um bom dia ');
}
