var  temario = []

const crearTemario = (req, res) => {
    // el request sirve para recibir tod lo que nos envia el usuario
    console.log(req.body)
    temario.push(req.body)
    return res.json({
        success: true
    })
}

const devolverTemario = (req, res) => {
    return res.json({
        success: true,
        content: temario,
        message: null
    })
}

const actualizarTemario = (req, res) => {
    console.log(req.params)
    let {id} = req.params

    if(temario[id]){
        console.log("hay un temario")
        temario[id] = req.body
        return res.json({
            success: true,
            content: temario[id],
            message: "Temario actualizado correctamente"
        })
    }else{
        console.log("No hay temario")
        return res.status(404).json({
            success: false,
            content: null,
            message: "Temario no existe"
        })
    }
}

const eliminarTemario = (req, res) => {
    let {id} = req.params

    if(temario[id]){
        let eliminado = temario.slice(id, 1)
        return res.json({
            success: true,
            content: eliminado,
            message: "Eliminado correctamente"
        })
    }else{
        return res.status(404).json({
            success: false,
            content: null,
            message: "No existe"
        })
    }
}

module.exports = {
    crearTemario,
    devolverTemario,
    actualizarTemario,
    eliminarTemario
}