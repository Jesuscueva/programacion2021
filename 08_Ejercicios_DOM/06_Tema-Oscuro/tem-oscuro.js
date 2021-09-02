const d = document,
    ls = localStorage

const darkTheme = (btn, dataDark, darkBtn)=>{
    let $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"),
    $slectorsBtn = d.querySelectorAll("[dark-btn]")

    console.log($selectors)

    let luna = "🌙",
        sol = "🌞"
    
    const lightMode = ()=>{
        $selectors.forEach((ele) => ele.classList.remove(dataDark))
        $slectorsBtn.forEach(btn=> btn.classList.remove(darkBtn))
        $themeBtn.textContent = luna
        ls.setItem("theme","light")
    }
    const darkMode = ()=>{
        $selectors.forEach((ele) => ele.classList.add(dataDark))
                $slectorsBtn.forEach(btn => btn.classList.add(darkBtn))
                $themeBtn.textContent = sol
        ls.setItem("theme", "dark")
    }
    
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            if($themeBtn.textContent === luna){
                darkMode()
            }else{
                lightMode()
            }
        }
    })

    d.addEventListener("DOMContentLoaded", (e)=>{
        
        if(ls.getItem("theme") === null)ls.setItem("theme", "light")

        if(ls.getItem("theme") === "light")lightMode()
        if(ls.getItem("theme") === "dark")darkMode()
    })
}

export default darkTheme