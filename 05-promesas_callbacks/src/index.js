// import "./style.css"
// import { promesaLenta, promesaMedia, promesaRapida} from "./js/promesas"
// import {buscarHeore, buscarHeoreAsync} from "./js/promesas"

import { heroesCiclo } from "./js/await";

// // // promesaLenta.then(console.log)
// // // promesaMedia.then(console.log)
// // // promesaRapida.then(console.log)

// // Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log)

// buscarHeore("capi").then(console.log)
// buscarHeoreAsync("iron").then(console.log)


// import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo } from "./js/await"

// // obtenerHeroesArr().then( console.table)
// console.time("await")

// obtenerHeroeAwait("capi2").then( heroe => {
//     console.log(heroe)

//     console.timeEnd("await")
// }).catch(console.warn)

heroesCiclo()