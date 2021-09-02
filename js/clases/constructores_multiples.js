


class Persona {
    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais)
    }

    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido
        this.pais     = pais
    }

    getInfo(){
        console.log(`La info es: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const   nombre1   = "mellisa"
        apellido2 = "Cueva"
        pais2     = "Honduras"

const fer = {
    nombre:   "Fernando",
    apellido: "Perez",
    pais:     "Perú"
}

const persona1 = new Persona( nombre1, apellido2, pais2)
const persona2 = Persona.porObjeto(fer)
persona1.getInfo()
persona2.getInfo()


