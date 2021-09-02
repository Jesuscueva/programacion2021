

const heroes = {
    capi: {
        nombre: "Capitan America",
        poder: "Aguantar inyecciones sin morir"
    },
    iron: {
        nombre: "Iron Man",
        poder: "Tener un gran intelecto"
    },
    spider: {
        nombre: "Spider-man",
        poder: "Todo del hombre Araña"
    }
}

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id]

    if(heroe){
        callback(null, heroe)
    }else{
        callback(`El id ${id} no existe`)
    }
}