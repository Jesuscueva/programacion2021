const d = document,
        w = window
export default function scrollTopBtn(btn){
    const $scrollBtn = d.querySelector(btn)
    
    
    w.addEventListener("scroll", (e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop
        // console.log(scrollTop)
        if(scrollTop >  600){
            $scrollBtn.classList.remove("hidden")
        }else{
        $scrollBtn.classList.add("hidden")
        }
    })

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }
    })
    const $arriba = d.querySelector(".arriba"),
            $abajo = d.querySelector(".abajo"),
            $stop = d.querySelector(".stop"),
            $play = d.querySelector(".play")
    const $scrollDiv = d.querySelector("#contenedor_scroll")

    $scrollDiv.addEventListener("scroll", e => {
        const scroll1 = $scrollDiv.scrollTop
        console.log(scroll1)
    })
    
    let i = 0

    const Up = () => {
        if($scrollDiv.scrollTop === 0){
            i = 670
            $scrollDiv.scrollTo({
                left: 0,
                top: i,
            })
            console.log("estamos arriba")
        }else{
            i = i - 94
            $scrollDiv.scrollTo({
                left: 0,
                top: i,
                behavior: "smooth"
            })
        }
    }
    const Down = () => {
        if($scrollDiv.scrollTop < 670){
            i = i + 94
            $scrollDiv.scrollTo({
                left:0, 
                top: i, 
                behavior:"smooth"
            })
            console.log($scrollDiv.scrollTop)
        }
        if($scrollDiv.scrollTop > 660){
            console.log("termino el scroll")
            $scrollDiv.scrollTo({
                left: 0,
                top: 0
            })
            i = 0
        }
    }
    let automatico = setInterval(()=>{
        Down()
    },3500)
    $arriba.addEventListener("click", e => {
        Up()
        clearInterval(automatico)
    })
    $abajo.addEventListener("click", e => {
        Down()
        clearInterval(automatico)
    })
    $stop.addEventListener("click", e => {
        clearInterval(automatico)
        console.log("detenido")
    })
    $play.addEventListener("click", e => {
        automatico = setInterval(()=>{
            Down()
        },3500)
        console.log("play")
    })


    
}

