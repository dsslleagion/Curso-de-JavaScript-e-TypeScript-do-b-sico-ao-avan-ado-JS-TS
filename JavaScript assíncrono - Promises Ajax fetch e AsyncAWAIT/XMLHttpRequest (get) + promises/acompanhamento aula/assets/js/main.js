//faz requisição de qualquer requisição
//XMLHttpRequest 

// const request = obj =>{
// const xhr = new XMLHttpRequest();
// //verbo GET
// xhr.open(obj.method, obj.url ,true);
// xhr.send();

// // verificação quando a função foi carregada
// //e codigo de resposta da API
// //codigo 200 sucesso
// //codigo 300 para cima considera-se erro
// // xhr.addEventListener('load', ()=>{
// // if(xhr.status >=200 && xhr.status <300){
    
// // }
// // })


// //agora aplicando função callback tradicionalmente e depois uma promise
// xhr.addEventListener('load', ()=>{
//     if(xhr.status >=200 && xhr.status <300){
//         obj.success(xhr.responseText);
//     }else{
//         obj.error(xhr.statusText);

//         //2 opção para aplicar o erro com ajax
//         // obj.error({
//         //     // code: xhr.status,
//         //     // msg: xhr.statusText
            
//         // });
//     }
//     });
// }; 
// //carregar eventos de clicks e depois carregar os elementos 
// document.addEventListener('click', e=>{
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();
//     if (tag === 'a'){
//         e.preventDefault();
//         carregaPagina(el);
//     }
// });
// //previnir evento e vai para a pagina
// function carregaPagina(el) {
//     // const href = el.getAttribute('href');
//     // request({
//     //     method:'GET',
//     //     url: href,
//     //     success(response){
//     //         carregaResultado(response);
//     //     },
//     //     error(errorText){
//     //         console.log(errorText);
            
//     //     }
//     // });
//     // request();

//     const objConfig = {
//         method: 'GET',
//         url: href,
//         success(response){
//             carregaResultado(response);
//         },
//         error(errorText){
//             console.log(errorText);
//         }
//     };
//     request(objConfig);

// }

// carregaResultado(response){
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// };

//agora aplicando promises e melhorando o codigo

const request = obj => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(obj.method, obj.url, true);
      xhr.send();
  
      xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      });
    });
  };
  
  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
  });
  
  async function carregaPagina(el) {
    const href = el.getAttribute('href');
  
    const objConfig = {
      method: 'GET',
      url: href
    };
  
    try {
      const response = await request(objConfig);
      carregaResultado(response);
    } catch(e) {
      console.log(e);
    }
  }
  
  function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }
  
