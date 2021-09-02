import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, tableList

const crearHtml = () => {
    const html = `
        <div class="row mt-4">
        <div class="col">
            <h1 class="text-center">Chistes Yisus</h1>
        </div>
        </div>
        <div class="row mt-4">
            <div class="col">
            <button class="btn btn-primary">Otro chiste..</button>
            </div>
        </div>
        <div class="row mt-4">
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Chiste</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    `;

    const divChistes = document.createElement('div')
    divChistes.innerHTML = html

    body.append(divChistes)
};


const eventos = () => {
    tableList = document.querySelector("tbody")
    btnOtro = document.querySelector("button")

    btnOtro.addEventListener("click", async(e)=> {
        console.log("Hola mundo")
        dibujarChiste(await obtenerChiste())
    })
}

// {id , value, }
const dibujarChiste = ( chiste )=>{
    const olItem = document.createElement("tr")
    olItem.innerHTML = `<th>${chiste.id}</th>
                        <th>${chiste.value}</th>`
    // olItem.classList.add("list-group-item")
    tableList.append(olItem)
}


export const init = ()=>{
    crearHtml(),
    eventos()
}