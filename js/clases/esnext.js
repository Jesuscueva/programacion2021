

class Rectanugulo{
    #area = 0

    constructor(base= 0, altura=0){
        this.base = base
        this.altura = altura

        this.#area = base * altura
    }
    calcularElDoble(){
        console.log(`El doble del area es ${this.#area * 2}`)
    }
}

const rectangulo = new Rectanugulo(10, 15)
// rectangulo.#area = 100
console.log(rectangulo)
rectangulo.calcularElDoble()
