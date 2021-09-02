import { buscarHeore, buscarHeoreAsync } from "./promesas"



const heroesId = ["capi", "iron", "spider"]

const heroesPromesas = heroesId.map( id => buscarHeore(id))

export const obtenerHeroesArr = async ()=>{

    return await Promise.all( heroesId.map(buscarHeore))

    // const heroesArr = []

    // for( const id of heroesId){
    //     heroesArr.push( buscarHeore(id) )
    // }

    // return await Promise.all( heroesArr )
}

export const obtenerHeroeAwait = async(id)=>{

    try{
        const heroe =await buscarHeoreAsync( id )
        return heroe
    }catch(err){
        console.log( "CATCH!! ")
        console.log(err)
    }
}

export const heroesCiclo = async()=>{
    console.time("HeroesCiclo")
    // const heroes = await Promise.all( heroesPromesas)
    // heroes.forEach( heroe => console.log(heroe))

    for await(const heroe of heroesPromesas){
        console.log(heroe)
    }

    console.timeEnd("HeroesCiclo")
}