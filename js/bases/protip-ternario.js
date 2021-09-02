

const Mayor = (a, b) => (a > b)? a : b

const tieneMenbresia = ( mienbro ) => (mienbro) ? "2 dolares" : "1O DOLARES"


console.log( Mayor(5,6))
console.log( tieneMenbresia(false))

const amigo = false

const amigosArr = [
    
    "Thor",
    "Tony",
    "Dr. Strange",
    amigo ? "Widow" : "Loki"
]

console.log( amigosArr)


const nota = 65 
const grado = nota >= 96 ? "A+" : nota >= 60? "B+" : nota >= 40 ? "C+" : nota >= 20? "Puede que apruebes" : "No aprobaste"
                