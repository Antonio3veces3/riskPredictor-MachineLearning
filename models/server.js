const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.hostname = process.env.HOSTNAME;

        this.middleware();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use((req,res)=>{
            res.status(400).send({
                "Error": "PAGE NOT FOUND"
            })
        })
    }

    listener(){
        this.app.listen(this.port, this.hostname, ()=>{
            console.log(`Server runnnig on ${this.hostname}:${this.port}`);
        })
    }

}

module.exports = {
    Server
}