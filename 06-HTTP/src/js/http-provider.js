const jokeUrl = "https://api.chucknorris.io/jokes/random"

const urlUsuarios = "https://reqres.in/api/users?page=2"

const cloudUrl = "https://api.cloudinary.com/v1_1/dhqluubjp/upload"

const obtenerChiste = async()=>{

    try {

        const respuest = await fetch( jokeUrl )
        if( !respuest.ok) return alert("No se pudo hacer la peticion")
        const { icon_url, id, value } = await respuest.json()
        
        return { icon_url, id, value }

    } catch (error) {
        throw error
    }
}

const traerUsuarios =  async()=>{
    const respuesta = await fetch( urlUsuarios)
    const {data: usuarios} = await respuesta.json()
    return usuarios
}


const subirImagen = async( archivo )=>{
    const formData = new FormData()
    formData.append("upload_preset", "voxrsyhi")
    formData.append("file", archivo)
    try {
        const peticion = await fetch(`${cloudUrl}`, {
            method:"POST",
            body: formData
        })
        if (peticion.ok){
            const { secure_url } = await peticion.json()
            return secure_url
        }else{
            throw await peticion.json()
        }
        
    } catch (error) {
        throw error
    }
}



export {
    obtenerChiste,
    traerUsuarios,
    subirImagen
}