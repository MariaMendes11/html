//Importa o modulo Express
const express = require("express");

//Define uma classe para organizar a logica da aplicação
class AppController {
  constructor() {
    //Cria uma nova instancia do Express dentro da classe
    this.express = express();
    //Chama o metodo o middlewares para configurar os middlewares
    this.middlewares();
    //Chama o metodo routes para definir as rotas de Api
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicalção recebe dados em formato JSON nas requisições
    this.express.use(express.json());
  }
  //Define as rotas da nossa API
  routes() {
    //Define uma rota GET para o caminho health
    this.express.get("/health/", (req, res) => {
      res.send({nome: "Maria Clara Mendes" , idade: "16" , CPF: "44676553870"});
    }); //Essa rota é usada ara verificar se a API esta OK
  }
}
//Exportando ainstancia de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express;