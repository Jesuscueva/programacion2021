const urlCRUD = "https://reqres.in/api/users"

//Traer usuario por id
const getUsuario = async(id)=>{
    const peticion = await fetch(`${urlCRUD}/${id}`)
    const {data} = await peticion.json()
    return data
}

const crearUsuario = async(usuario)=>{
    const peticion = await fetch(`${urlCRUD}`, {
        method: "POST",
        body: JSON.stringify( usuario ),
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await peticion.json()
    return data 
}

const actualizarUsuario = async(usuario, id)=>{
    const peticion = await fetch(`${urlCRUD}/${id}`, {
        method: "PUT",
        body: JSON.stringify( usuario ),
        headers: {
            "Content-type": "application/json"
        }
    })
    const data = await peticion.json()
    return data 
}

const borrarUsuario = async(id)=>{
    const peticion = fetch(`${urlCRUD}/${id}`, {
        method: "DELETE"
    })
    const data = await peticion.json()
    return data
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}