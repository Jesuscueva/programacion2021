const d = document

const FilterBusqueda = (input, selector) => {
    d.addEventListener("keyup", e =>{
        if(e.target.matches(input)){
            // console.log(e.key)
            d.querySelectorAll(selector).forEach(el => {
                
            })
        }
    })
}

export default FilterBusqueda