const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../db/dbConnection");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.hostname = process.env.HOSTNAME;
    this.paths = {
        auth: "/auth"
    };
    this.connectDB();
    this.middleware();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }
  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes(){
    this.app.use(this.paths.auth, require('../routes/auth.routes'))
  }
  listener() {
    this.app.listen(this.port, this.hostname, () => {
      console.log(`Server runnnig on ${this.hostname}:${this.port}`);
    });
  }
}

module.exports = {
  Server,
};
