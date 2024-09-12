# Criando "package.json
npm init -y
# Instalando Babel e webpack e outras 
npm i --save-dev @babel/preset-env @babel/cli @babel/core babel-loader webpack webpack-cli regenerator-runtime core-js@2

# criar .gitignore 
colocar arquivo "node_modules' dentro do arquivo para evitar de enviar o node_modules ao git
se caso instalar novamente o projeto basta apenas usar o packege.json para instalar as dependencias e o node_modules novamente
com o comando "npm i"

# criar arquivo de configuração do webpack 
webpack.config.js

ele é necessario para gerenciar e carregar modulos

ex
const path = require('path'); // CommonJS

CommonJS - sistema de modulos

depois do comando escrever outro comando para exportar

module.exports = {
  mode:'development',

};
 
e no modulo exports pode escolher qual arquivo sera o arquivo que executa toda a aplicação 

const path = require('path'); // CommonJS , importando path

module.exports = { //config do module
    mode:'development', //ativando modo dev para codar e gerar bundle
    entry:'./src/index.js', // escolhendo o arquivo de entrada 
    output:{ // escolendo e encaminhando o local de saida 
        "path": path.resolve(__dirname, 'public','assets','js'), //selecionando o local do bundle
        filename: 'bundle.js' // nomde do arquivo do bundle
    },
    module:{
        rule: [{ // gerenciamento de regras
            exclude: /node_modules/, // comando que evita que o babel e o compilador olhe o node
            test:/\.js$/, // faz o node procurar os arquivos js
            use:{ //escolha da dependencia para a geração de compilador
                loader: 'babel-loader',
                options: {
                    presets:['@babel/env']
                }
            }
        }]
    },
    devtool:'source-map'
  };


# Criando a pasta src ou SOURCE

localiza se modulos do projeto e todo projeto possui modulos e classes são modulos 

# criando uma pasta PUBLIC 

pasta aonde o usuario verá tudo da aplicação

# agora configurar package.json 

{
  "name": "aula",
  "version": "1.0.0",
  "description": "npm init -y\r # Instalando Babel e webpack e outras \r npm i --save-dev @babel/preset-env @babel/cli @babel/core babel-loader webpack webpack-cli regenerator-runtime core-js@2",
  "main": "index.js",
  "scripts": {
    "gera": "webpack -w" //colocando o script de execução do projeto 
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.25.6",
    "@babel/core": "^7.25.2",
    "@babel/preset-env": "^7.25.4",
    "babel-loader": "^9.1.3",
    "core-js": "^2.6.12",
    "regenerator-runtime": "^0.14.1",
    "webpack": "^5.94.0",
    "webpack-cli": "^5.1.4"
  }
}