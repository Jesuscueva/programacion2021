


class Persona{
    static _conteo = 0

    static get conteo(){
        return Persona._conteo + "instancia"
    }

    static mensaje(){
        console.log( this.nombre)
        console.log("Hola a todos, soy una método stático")
    }


    nombre=""
    codigo=""
    frase=""
    comida= ""
    constructor(nombre="", codigo="", frase = "Sin frase"){
        this.nombre = nombre,
        this.codigo = codigo
        this.frase = frase
    }
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase()
    }

    get getComidaFvorita(){
        return `La comida favorita de ${this.nombre} es ${this.getComidaFvorita}`
    }

}

const spiderman = new Persona("Peter Parker", "Spider", "Hola soy spider-man")
const ironman = new Persona("Tony Stark", "Iron man", "Yo soy iron man")
// console.log(ironman)

spiderman.setComidaFavorita = "Pastel de chocolote"

console.log(spiderman)

console.log("Conteo stático", Persona._conteo)
console.log( Persona.conteo)
Persona.mensaje()

Persona.propiedadExterna  = "Hola Mundo"
console.log(Persona.propiedadExterna)
console.log(Persona)