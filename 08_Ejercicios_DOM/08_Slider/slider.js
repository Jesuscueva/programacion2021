const d = document

const Slider = () => {
    const $nextBtn = d.querySelector(".slider-btns .next"),
            $prevBtn = d.querySelector(".slider-btns .prev"),
            $slides = d.querySelectorAll(".slider-slide")

    let i = 0
    var Prev = ()=>{
        $slides[i].classList.remove("active")
        i--;

        if(i < 0){
            i = $slides.length - 1
        }

        $slides[i].classList.add("active")
    }

    var Next = ()=>{
        $slides[i].classList.remove("active")
        i++;

        if(i >= $slides.length){
            i = 0
        }

        $slides[i].classList.add("active")
    }
    $nextBtn.addEventListener("click", (e) => {
        Next()
        clearInterval(interval)
    })
    $prevBtn.addEventListener("click", e => {
        Prev()
        clearInterval(interval)
    })
    

    const interval = setInterval(()=>{
        Next()
        console.log("automatico")
    }, 2000)
}
export default Slider