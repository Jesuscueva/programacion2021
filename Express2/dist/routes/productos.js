const productosController = require("../controllers/productos")

const {Router}= require("express")

const productos_route = Router()

productos_route.get("/producto", productosController.getProductos)
productos_route.post("/producto", productosController.postProductos )
productos_route.put("/producto/:id", productosController.putProductos)
productos_route.delete("/producto/:id", productosController.deleteProductos)

module.exports = productos_route