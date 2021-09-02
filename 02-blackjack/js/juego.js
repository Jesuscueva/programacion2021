/**
 * C = TREBOL
 * D = DIAMANTE
 * H = CORAZON
 * S = ESPADAS
 */



///Referencias del HTML
const small = document.querySelectorAll("small")

const jugadoresCartas = document.querySelector("#jugadores-cartas")
const computadoraCartas = document.querySelector("#computadora-cartas")

const btnNuevo = document.querySelector("#btnNuevo")
const btnPedir = document.querySelector("#btnPedir")
const btnDetener = document.querySelector("#btnDetener")


let deck = []
const tipos = ["C", "D", "H", "S"]
const especiales = ["A", "J", "Q", "K"]

let puntosJugador = 0,
    puntosComputadora = 0

const crearDeck  = () => {
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo)
        }
        // deck.push(i + "C")
    }

    for (let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo)
        }
    }

    deck = _.shuffle(deck)
    console.log(deck)
    return deck
}
crearDeck()

// ESTA FUNCION ME AYUDARÁ A PEDIR UNA CARTA

const pedirCarta = ()=> {

    if(deck.length === 0){
        throw 'No hay cartas en el deck'
    }
    const carta = deck.pop()

// console.log(carta)
// console.log(deck)
    return carta
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1)
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1
}

// const valor = valorCarta( pedirCarta() )
// console.log({ valor })


// turno de la computadoraa
const turnoComputadora = (puntosMinimos)=>{

    do{
        const carta = pedirCarta()

    puntosComputadora = puntosComputadora + valorCarta(carta)
    console.log({ puntosComputadora})
    small[1].innerText = puntosComputadora


    // <img class="carta" src="cartas/2C.png" alt="">
    const imgCarta = document.createElement("img")
    imgCarta.src = `cartas/${ carta }.png`
    imgCarta.classList.add("carta")
    computadoraCartas.append(imgCarta)

    if(puntosMinimos > 21){
        break
    }
        
    }while(puntosComputadora < puntosMinimos && puntosMinimos <=21 )

    setTimeout(()=>{
        if(puntosComputadora === puntosMinimos){
            alert("Naddie gana")
        } else if(puntosMinimos > 21){
            alert("Computadora Gana")
        } else if(puntosComputadora > 21){
            alert("Jugador Gana")
        } else {
            alert("Computadora Gana")
        }
    }, 100)

}


//  Eventos
btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta()

    puntosJugador = puntosJugador + valorCarta(carta)
    console.log(puntosJugador)
    small[0].innerText = puntosJugador


    // <img class="carta" src="cartas/2C.png" alt="">
    const imgCarta = document.createElement("img")
    imgCarta.src = `cartas/${ carta }.png`
    imgCarta.classList.add("carta")
    jugadoresCartas.append(imgCarta)


    if(puntosJugador > 21) {
        console.warn("perdiste")
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugador)
    }else if(puntosJugador === 21){
        console.log("WIIII 21, GANASTEE")
        btnDetener.disabled = true
        btnPedir.disabled = true
        turnoComputadora(puntosJugador)
    }
    
})

btnDetener.addEventListener('click', ()=>{
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoComputadora(puntosJugador)
})

btnNuevo.addEventListener('click', ()=>{
    console.clear()
    console.log("nuevo")
    btnPedir.disabled = false
    btnDetener.disabled = false
    
    deck = []
    deck = crearDeck()
    puntosJugador = 0
    puntosComputadora = 0

    small[0].innerText = 0
    small[1].innerText = 0

    jugadoresCartas.innerHTML = ""
    computadoraCartas.innerHTML = ""

})



