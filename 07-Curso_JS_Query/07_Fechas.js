// Fechas
var body = document.querySelector("body")

const reloj = ()=>{
    let fecha = new Date()
    console.log(fecha)
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()
    // console.log(hora, minutos, segundos)

    const div = document.createElement("div")
    div.innerHTML = `Hora: ${hora} Minutos: ${minutos} Segundos: ${segundos}`
    body.appendChild(div)
}

const relojFuncion = ()=>{
    setInterval( reloj, 1000)
}

// relojFuncion()

