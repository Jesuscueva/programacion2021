const express = require("express")
const temario_route = require("../routes/productos")
const bodyParser = require("body-parser")

class Server{

    constructor(){
        this.app = express()
        this.puerto = process.env.PORT || 5000
        this.consfigurarBodyParser()
        this.rutas()
    }
    consfigurarBodyParser(){
        this.app.use(bodyParser.json())
    }

    rutas(){
        this.app.get("/", (req, res)=>{
            console.log("Ruta Inicial")
            return res.send("Hola Mundo")
        })
        this.app.use(temario_route)
    }

    iniciarServidor(){
        this.app.listen(this.puerto, ()=>{
            console.log(
                `Estamos iniciando el servidor en el puerto ${this.puerto}`
            )
        })
    }

}


module.exports = Server