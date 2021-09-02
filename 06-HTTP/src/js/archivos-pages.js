import { subirImagen } from "./http-provider"

const body = document.body

var inputFile, imgFoto

const crearInputFileHtml =()=>{
    const html = `
        <h1 class="mt-5">Subir Archivos</h1>
        <div className="row">
            <div className="col input-group">
                <label htmlFor="" class="">Seleccione su imagen</label>
                <hr>
                <input type="file" class="form-control" accept="image/png, image/jpeg">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
            <img id="foto" class="img-thumbnail" src="">
            </div>
        </div>
    `
    const div = document.createElement("div")
    div.innerHTML = html
    body.appendChild(div)

    inputFile = document.querySelector("input")
    imgFoto = document.querySelector("#foto")
}


const eventos = () => {
    inputFile.addEventListener("change", (e)=>{
        const imagen = e.target.files[0]
        subirImagen(imagen).then( link => {
            imgFoto.setAttribute("src", link)
        })
    })
}



export const init = ()=>{
    crearInputFileHtml(),
    eventos()
}