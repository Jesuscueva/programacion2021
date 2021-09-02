

class Singleton {

    static instancia
    nombre = ""

    constructor(nombre = ""){

        if(!!Singleton.instancia){
            console.log(Singleton.instancia)
            return Singleton.instancia
        }
        Singleton.instancia = this
        this.nombre = nombre

            
    }
}


const instancia1 = new Singleton("ironman")
const instancia2 = new Singleton("Spiderman")

console.log(`Nombre en la instancia es: ${instancia1.nombre}`)
console.log(`Nombre en la instancia es: ${instancia2.nombre}`)