//Biblotecas responsaveis por manipular e controlar os caminhos e acesso a arquivos
const fs = require('fs').promises;
const path = require('path');

// //verifica o caminho atual do arquivo e exibe ele
// fs.readdir(path.resolve(__dirname))
// .then(files => console.log(files))
// .catch(e => console.log(e));



//listando e caminhando entre pastas e arquivos 
// async function readdir(rootDir){
//  rootDir = rootDir || path.resolve(__dirname); 
//  const files = await fs.readdir(rootDir);
//  walk(files);
// }

// function walk(files){
//     for(let file of files){
//         console.log(file);
        
//     }
// }

// readdir('Javascript - lógica de programação');



//

// async function readdir(rootDir){
//     rootDir = rootDir || path.resolve(__dirname); 
//     const files = await fs.readdir(rootDir);
//     walk(files, rootDir);
//    }
   
//    async function walk(files){
//        for(let file of files){
//         const fileFullPath = path.resolve(rootDir, file);
//         const stats = await fs.stat(fileFullPath);
//            console.log(file, stats.isDirectory());
           
//        }
//    }
   
//    readdir("Documents\Curso-de-JavaScript-e-TypeScript-do-b-sico-ao-avan-ado-JS-TS");
   

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname); 
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
   }
   
   async function walk(files){
       for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(stats.isDirectory()){
            readdir(fileFullPath);
        }
           console.log(file, stats.isDirectory());
           
       }

       //if(/\.git/g.test(fileFullPath)) continue;
   }
   
   readdir("c:Users/Dionisio/Documents/Curso-de-JavaScript-e-TypeScript-do-b-sico-ao-avan-ado-JS-TS");
   