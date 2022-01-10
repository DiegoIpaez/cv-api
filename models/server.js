const express = require("express");
const cors = require("cors");

const { dbConection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.authPath = "/api/auth"
    this.usuariosPath = "/api/usuarios"
    
    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  //Conectando con la BD
  async conectarDB() {
    await dbConection();
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(){
    this.app.use(this.authPath, require("../routes/auth"));
    //ruta de usuarios
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor online en puerto", this.port);
    });
  }
}

module.exports = Server;
