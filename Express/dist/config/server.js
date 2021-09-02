const express = require("express")
const temario_router = require("../routes/Temario")
const bodyParser = require("body-parser")


class Server{
    constructor(){
        this.app = express();
        // Hace una busqueda en las variable de entoorno de PORT y si no hay por defecto será el puerto 5000 que indico
        this.puerto = process.env.PORT || 5000;
        this.configururarBodyParser()
        this.rutas()
    }
    
    configururarBodyParser(){
        this.app.use(bodyParser.json())
    }
    rutas(){
        // Encargado de configurar todas la rutas de mi aplicación
        this.app.get("/", (req, res) => {
            console.log("El cliente me llama")
            return res.status(200).send("Bienvenido a mi APP con Node")
        })
        this.app.use(temario_router)
    }

    iniciarServidor(){
        // El metodo listen escucha al servidor que se lenvanta mediante un determinado puerto
    this.app.listen(this.puerto, ()=>{
        console.log(`El servidor se ah levantado exitossamente en el puerto ${this.puerto}`)
    })
    }
}

module.exports = Server