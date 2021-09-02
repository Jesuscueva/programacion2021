"use strict"

$(document).ready(function(){
    //Selector de etiquetas
    let span = $("span")
    span.css("border", "1px solid blue")
    span.css("border-radius", "15px")
    span.css("padding", "10px")
    console.log(span.text())

    //Selector de Atributos
    let atributo = $(`[title= "google"]`)
    atributo.css("font-size", "45px")
    console.log(atributo.text())
})