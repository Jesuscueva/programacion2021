let productos = [
    { id: 1, producto: "Paneton" },
    { id: 2, producto: "Arroz" },
    { id: 3, producto: "Laptop" },
    { id: 4, producto: 'Paneton' }
];

const getProductos = (req, res) => {
    return res.json({
    success: true,
    content: productos,
    message: null,
    });
};

const postProductos = (req, res) => {
    console.log(req.body);
    productos.push(req.body);
    return res.json({
    success: true,
    content: null,
    message: "Agregao",
    });
};

const putProductos = (req, res) => {
    console.log(req.params)
    let {id} = req.params
    if(productos[id]){
        let newProduct = productos[id] = req.body
        return res.json({
            success: true,
            content: newProduct,
            message: "Producto actualizado"
        })
    }else{
        return res.json({
            success: false,
            content: null,
            message: "No existe el producto"
        })
    }
}
const deleteProductos = (req, res)=>{
    let {id} = req.params
    if(productos[id]){
        let eliminado = productos.slice(id, 1)
        console.log(eliminado)
        return res.json({
            success: true,
            content: eliminado,
            message: "Producto eliminado"
        })
    }else{
        return res.json({
            success: false,
            content: null,
            message: "No existe el producto"
        })
    }
}

module.exports = {
    getProductos,
    postProductos,
    putProductos,
    deleteProductos
};
