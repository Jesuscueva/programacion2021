
const d = document

export default function countDown(id, limitDate, frase){
    const $countDown = d.getElementById(id),
            countDownDate = new Date(limitDate).getTime()
    
    let countDownTempo = setInterval(()=>{
        let now = new Date().getTime()
        let limitTime = countDownDate - now,
            factor = (1000*60*60*24),
            day = Math.floor(limitTime/ factor),
            hora =("0" + Math.floor((limitTime % factor)/(1000*60*60))).slice(-2),
            minutes = ("0" + Math.floor((limitTime % (1000*60*60))/(1000*60))).slice(-2),
            seconds = ("0" + Math.floor((limitTime % (1000*60))/(1000))).slice(-2)
        $countDown.innerHTML = `<h3>Faltan: ${day} días ${hora} horas ${minutes} minutos ${seconds} segundos</h3>`
        // console.log(limitTime )
    if(limitTime < 0){
            clearInterval(countDownTempo)
            $countDown.innerHTML = `<h3>${frase}</h3>`
        }
    }, 1000)

    
}