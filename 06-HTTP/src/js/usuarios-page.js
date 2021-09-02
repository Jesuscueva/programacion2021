import { traerUsuarios } from "./http-provider";



const body  = document.body;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5 text-center mb-4"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
            // querySelector('tbody');
            // Crear una variable para mantener la referencia?

}



// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario, i) => {
    const tbody =document.querySelector("#tbody")

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar


    const html = `
        <td scope="col">${i + 1}</td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.append(tr)

    // Añadir el table row (tr) dentro del TBody creado anteriormente

}


export const init2 = async() => {

    crearHtml();

    traerUsuarios().then( usuarios => {
        usuarios.forEach((usu, i)=>{ 
            crearFilaUsuario(usu, i)
        })
    })

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

