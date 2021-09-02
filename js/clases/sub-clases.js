

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
    constructor(nombre="Sin Nombre", codigo="Sin Codigo", frase = "Sin frase"){
        this.nombre = nombre,
        this.codigo = codigo
        this.frase = frase
    }
    quienSoy(){
        console.log(`Mi nombre es ${this.nombre} y mi frase es ${this.frase}`)
    }
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase()
    }

    get getComidaFvorita(){
        return `La comida favorita de ${this.nombre} es ${this.getComidaFvorita}`
    }

}

class Heroe extends Persona{
    clan = "Sin clase"

    constructor(nombre, apellido, frase){
        super(nombre, apellido, frase)
        this.clan = "Avengers"
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, pertenezco a ${this.clan}`)
        super.quienSoy()
    }
}

const spiderman = new Heroe("Peter Parker", "Spider", "Hola soy spider-man")

// const spiderman = new Heroe()
console.log(spiderman)
spiderman.quienSoy()
