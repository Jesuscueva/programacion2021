

const regresaTrue = ()=>{
    console.log("Regresa true")
    return true
}
const regresaFalse = () =>{
    console.log("Regresa False")
    return false
}


console.warn("///////////////////////////////////")
console.warn("AND")

console.log( true && true)
console.log( regresaTrue() && regresaTrue() )

regresaTrue() && regresaFalse()

console.log("Asignaciones")
const soyFalso = false


const al = true && 'Hola Mundo' && 150
const a2 = "Hola" && "Mundo" && soyFalso

console.log({al, a2})


