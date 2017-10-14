# NudesGo

  O naturismo (não confundir com naturalismo) é um conjunto de princípios éticos e comportamentais que preconizam um modo de vida baseado no retorno à natureza como a melhor maneira de viver e defendendo a vida ao ar livre, o consumo de alimentos naturais e a prática do nudismo, entre outras atitudes. (Wikipedia)

 Pelo mundo existem espaços específicos destinados a práticas do modo de vida naturista, o NudesGo é uma solução de serviço para todos aqueles que desejam encontrar lugares onde possam praticar um estilo de vida mais próximo a natureza, compartilhar experiencias  e comentários, ajudando assim a comunidade.

## 1. Tecnologias  usadas e suas versões

   NodeJS - versão 6.11.3

   Express.js 4.16.2

   Vue.js  2.9.1

   MariaDB  mysql  Ver 15.1 Distrib 10.1.26-MariaDB, for Linux (x86_64) using readline 5.1

   Gulp  3.9.1

   Jade 1.11.0


## 2. Como executar o projeto

   1 - Baixe ou clone o projeto para sua máquina
   
   ``` 
   git clone https://github.com/IgorGoncalves/nudesGo.git  
   ```
   2 - Execute a instalação das dependencias do NPM pelo terminal usando o comando abaixo na pasta do projeto (talvez seja necessário atualizar o NPM).

   ``` 
   npm install  
   ```

   3 - Modificar Crie uma base de dados mysql chamada "nudesgodb" 

   4- Edite/Crie o o arquivo  config/config.js com usuário e senha do seu banco de dados

  ```javascript
  var path = require('path'),                        
  rootPath = path.normalize(__dirname + '/..'),                        
  env = process.env.NODE_ENV || 'development';                                        
  var config = {
  development: { 
      root: rootPath,
      app: {
            name: 'nudes-go'
            },
      port: process.env.PORT || 3000,
      db: 'mysql://user:password@localhost/nudesgodb',
      },
      test: {
        root: rootPath,
        app: {
          name: 'nudes-go'
        },
        port: process.env.PORT || 3000,
        db: 'mysql://localhost/nudes-go-test'
       },
       production: {
       root: rootPath,
       app: {
          name: 'nudes-go'
          },
          port: process.env.PORT || 3000,
          db: 'mysql://localhost/nudes-go-production'
        }
  };
  module.exports = config[env]; 
  ```
    

   5 - Agora execute o comando  ``` gulp ``` (necessário instalar o [gulp-cli](https://gulpjs.com/) para executar a task inicial para iniciar o servidor Express, se tiver tudo configurado corretamente ele deve criar as tabelas do projeto e e vocêvai poder acessar a pagina principal via http://localhost:3000


## 3. Como contribuir

Entre em contato via email com: igor_goncalves@live.com ou may.mchdo@gmail.com ou então crie uma issue.
