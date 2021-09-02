
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

export const buscarHeore = (id) => {
    const heroe = heroes[id]
    
    return new Promise( (resolve, reject) => {
        if( heroe ){
            resolve( heroe )
        }else{
            reject(`No existe un héroe con el id ${ id }` )
        }
    } )
}


export const buscarHeoreAsync = async(id) => {
    const heroe = heroes[id]
    if( heroe ){
        return heroe
    }else{
        throw `No existe un héroe con el id ${ id }` 
    }
}


const promesaLenta = new Promise( (resolve, reject)=> {
    setTimeout(() => resolve("Promesa lenta"), 2000)
})

const promesaMedia= new Promise( (resolve, reject)=> {
    setTimeout(() => resolve("Media"), 1500)
})
const promesaRapida = new Promise( (resolve, reject)=> {
    setTimeout(() => resolve("Promesa Rpaida"), 1000)
})

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}