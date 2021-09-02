const { Router } = require("express")
const {crearTemario, devolverTemario, actualizarTemario, eliminarTemario}= require("../controllers/Temario")

const temario_router = Router()

temario_router.post("/temario", crearTemario)
temario_router.get("/temario", devolverTemario)
temario_router.put("/temario/:id", actualizarTemario)
temario_router.delete("/temario/:id", eliminarTemario)

module.exports = temario_router