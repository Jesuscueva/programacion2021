

export default function hamburguer(panelBtn, panel, menuLink){
    const d = document;
    const panel1 = d.querySelector(panel)
    const btnPanel = d.querySelector(panelBtn)
    d.addEventListener("click", e =>{
        // console.log(e.target)
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            panel1.classList.toggle("is-active")
            btnPanel.classList.toggle("is-active")
        }

        if(e.target.matches(menuLink)){
            panel1.classList.remove("is-active")
            btnPanel.classList.remove("is-active")
        }
    })
}