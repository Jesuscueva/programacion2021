const express = require("express")
const {json} = require("body-parser")
const {conexion} = require("./Sequelize")
const CategoriModel = require("../models/Categoria")
const ClienteModel = require("../models/Cliente")


class Server{

    constructor(){
        this.app = express(),
        this.puerto = process.env.PORT || 5000,
        this.configurarBodyParser(),
        this.CORS(),
        this.rutas()
    }

    configurarBodyParser(){
        this.app.use(json())
    }
    CORS(){
        // Son el control de acceso a mi api, aca defenimos que dominios pueden accder y que metodos se pueden utilizar
        this.app.use((req, res, next)=>{
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
            res.header("Access-Controll-Methods", "GET, POST, PUT, DELETE")
            next()
        })
    }
    rutas(){
        this.app.get("/", (req, res)=>{
            return res.status(200).send("Bienvenido a Mi API 👨‍🎓")
        })
    }

    iniciarServidor(){
        this.app.listen(this.puerto, async()=> {
            console.log(
                `Esto esta iniciando en el puerto ${this.puerto}`
            )
            const Categoria = CategoriModel()
            const Cliente = ClienteModel()
            try {
                let respuesta = await conexion.sync()
                // console.log(respuesta)
                console.log("Base de datos sincronizda correctamente")
            } catch (error) {
                console.log(error)
            }
        })
    }
}

module.exports = Server