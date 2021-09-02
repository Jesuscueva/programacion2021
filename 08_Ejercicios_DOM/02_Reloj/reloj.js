const d = document

export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString()
                // console.log(clockHour)
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }, 1000)
        e.target.disabled = true
        e.target.classList.toggle(".select")
        e.target.style.background = "#f7df1e"
        e.target.style.color = "rgba(34,34,34, 0.85)"
        e.target.style.cursor = "none"
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo)
            d.querySelector(btnPlay).disabled = false
            d.querySelector(clock).innerHTML = "--:--:--"
            d.querySelector(btnPlay).style.background = "rgba(34,34,34, 0.85)"
            d.querySelector(btnPlay).style.color = "#fff"
            d.querySelector(btnPlay).style.cursor = "pointer"
        }
    })
}


export function alarm(sound, btnPlay, btnStop){
    let alarmaTempo;
    const $alarm = d.createElement("audio")
    $alarm.src = sound
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            alarmaTempo = setTimeout(()=>{
                $alarm.play()
            },2000)
            e.target.disabled = true
            
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo)
            $alarm.pause()
            $alarm.currentTime = 0
            d.querySelector(btnPlay).disabled = false
        }
    })
}