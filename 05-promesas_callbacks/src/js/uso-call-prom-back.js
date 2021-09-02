import "./style.css"
import  {buscarHeroe as buscarHeroeCallback} from "./callbacks"
import { buscarHeore } from "./promesas"

const heroeId1 = "iron"
const heroeId2 = "spider"

// buscarHeroe( heroeId, (error, heroe)=>{
//     if(error){
//         console.error(error)
//     }else{
//         console.info( heroe )
//     }
// } )

// buscarHeroe( heroeId1, (error, heroe) => {
//     if(error){return console.error(error)}
// })


// buscarHeore(heroeId1).then(heroe1 => {
//     // console.log(heroe)
//     buscarHeore(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`)
//     })
// })

Promise.all( [ buscarHeore(heroeId1), buscarHeore(heroeId2) ]).then( ([heroe1, heroe2]) => {
    // console.log("promise.all", arr)
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`)
}).catch( err => {
    alert(err)
}).finally( ()=>{
    console.log("Se termino el progrma")
})


console.log("Fin del programa")