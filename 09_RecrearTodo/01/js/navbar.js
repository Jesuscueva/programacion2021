

export function navBar(menu, idNav, linkNav){
    const d = document
    d.addEventListener("click", e =>{
        if(e.target.matches(menu) || e.target.matches(`${menu} *`)){
            console.log("Nav presionado")
            d.querySelector(idNav).classList.toggle("is-active")
            d.querySelector(menu).classList.toggle("is-active")
        }
        if(e.target.matches(linkNav) || e.target.matches(`${idNav} *`)){
            console.log("seleccione un a")
            d.querySelector(idNav).classList.remove("is-active")
        }

    })
}