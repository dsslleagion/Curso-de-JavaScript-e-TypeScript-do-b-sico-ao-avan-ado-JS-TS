//Criação de promise desnecessaria porque o fetch já cria uma promise
// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});
// //removendo async,await, try,catch
//  function carregaPagina(el) {
//   const href = el.getAttribute('href');


//   //não necessario 
//   // const objConfig = {
//   //   method: 'GET',
//   //   url: href
//   // };

//   //carregando o link, carregando a resposta e convertendo para text
//   fetch(href)
//   .then(response => {
//     if(response.status !== 200) throw new Error("ERROR 404");
//     return response.text();
//   })
//   .then(html => carregaResultado(html))
//   .catch(e => console.log(e));
//   const response = request(response);
  
  
  
// }

// convertendo novamente para async e await
// depois de convertido é necessario realiar tratamento com try,catch

// async function carregaPagina(el) {
//   const href = el.getAttribute('href');
//   const response = await fetch(href);

//   if(response.status !== 200) throw new Error("ERROR 404");

//   const html = await response.text();
//   carregaResultado(html);  
  
// }



async function carregaPagina(el) {
  try{
    const href = el.getAttribute('href');
    const response = await fetch(href);
  
    if(response.status !== 200) throw new Error("ERROR 404");
  
    const html = await response.text();
    carregaResultado(html);  
  }catch(e){
    console.log(e);
    
  }
  
  
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

//----------------------------------------------------------------
//aplicando fetch
//carregar conteudo da pagina 1

// fetch('pagina1.html')
// .then(responta => {
//   if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO')
// })
// .catch(e => console.log(e));

//desta forma acima nem sempre ele retorna todos os dados que  vc precisa
//por esse motivo é necessario converter os dados 

// fetch('pagina1.html')
// .then(responta => {
//   if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
//   return responta.text();//função retornando outra promise e é necessario outro then
// })
// .catch(e => console.log(e));


//aplicando outro then


// fetch('pagina.html')
// .then(responta => {
//   if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO')
//   return responta.text();//função retornando outra promise e é necessario outro then
// })
// .catch(html => console.log(html))
// .catch(e => console.log(e));


// // tipos de console 
// console.log();
// console.error();
// console.warn();



fetch('pagina.html')
.then(responta => {
  if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO')
  return responta.text();//função retornando outra promise e é necessario outro then
})
.catch(html => console.log(html))
.catch(e => console.log(e));

