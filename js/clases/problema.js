

const datos = {
    nombre: "Jesus",
    edad: 12,
    imprimir(){
        console.log(`Nombre${ this.nombre } - edad ${ this.edad}`)
    }
}

const juan = {
    nombre: "Juancito",
    edad: 30
}

const melisa = {
    nombre: "melisa",
    edad: 12
}

datos.imprimir()

function Persona(nombre, edad){
    console.log("Entre a la funcion")
    this.nombre= nombre,
    this.edad = edad,
    this.datos = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}

const maria = new Persona("Maria", 12)
console.log(maria)
maria.datos()