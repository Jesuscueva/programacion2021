import hamburguer from "./01_Menu.js/menu_hamburguesa.js"
import { alarm, digitalClock } from "./02_Reloj/reloj.js"
import { ball, shorcuts } from "./03_Eventos Teclado/teclado.js"
import countDown from "./04_CuentaRegresiva/cuentaRegresiva.js"
import scrollTopBtn from "./05_BotonScroll/btn-Scroll.js"
import darkTheme from "./06_Tema-Oscuro/tem-oscuro.js"
import responsiveMedia from "./07_Objeto_Responsive/obj_responsive.js"
import Slider from "./08_Slider/slider.js"
import FilterBusqueda from "./09_Filtro/filtro_busqueda.js"

const d = document

d.addEventListener("DOMContentLoaded", e =>{
    hamburguer(".panel-btn", ".panel", ".menu a")
    digitalClock("#reloj","#activar-reloj", "#detener-reloj")
    alarm("assets/alarma_2.mp3", "#activar-alarma", "#detener-alarma")
    countDown("countDown", "Julio 06, 2021 00:01:00", "Feliz Cumpleeeeee")
    scrollTopBtn(".scroll-top-btn")
    responsiveMedia(
        "youtube", 
        "(min-width: 700px)", 
        `<a href=https://www.youtube.com/watch?v=_c26Fyi7RFA&list=PLvq-jIkSeTUbpfewvbKLhHctdkgadAy-K&index=1">Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/_c26Fyi7RFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    responsiveMedia(
        "map", 
        "(min-width: 700px)", 
        `<a href="https://goo.gl/maps/xkhPb3Tg196janrJA">Ir a Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7804.9515560024975!2d-77.0340682!3d-12.0107315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf132f8e50c9%3A0x9acf42b7f6793262!2sEJECUTA!5e0!3m2!1ses-419!2spe!4v1620343235917!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    )
    Slider()
    FilterBusqueda(".card-filter", ".card")
}) 


//Eventos de Teclado
//-- tenemos keydown
//-- tenemos keyup
//-- tenemos keypress

darkTheme(".dark-mood", "dark", "dark-btn")

d.addEventListener("keydown", (e)=>{
    shorcuts(e)
    ball(e,".ball", ".stage")
})



