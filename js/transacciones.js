let listaTrasaccion = JSON.parse(localStorage.getItem('lista-transacciones'))
let radioBtn;

document.addEventListener("DOMContentLoaded", () => {
    try {
        document.querySelector("input[type='search']").addEventListener("keyup", () => showTransaccion(buscar()))
        radioBtn = document.querySelectorAll("input[type='radio']")
        document.querySelectorAll("input[type='radio']").forEach(e => e.addEventListener("change", filtrar))
        showTransaccion(buscar());
    } catch (error) {
        document.body.innerHTML += `<p class="alert alert-danger text-center">La lista se encuentra vacia, por favor ingrese algun valor <a href="index.html">aquí</a> y vuelva a intentarlo </p>`
    }
})

//Filtra la lista de transacciones por compra o venta
let filtrar = () => {
    let filtrado = listaTrasaccion.filter(e => e.transaccion === opcion(radioBtn) || opcion(radioBtn) === "all" ? listaTrasaccion : null)
    seleccionado()
    return showTransaccion(filtrado)
}

//Gestiona la búsqueda de coincidencias entre lo ingresado por el usuario y las propiedades de cada transacción
let buscar = () => {
    let search = document.querySelector("input[type='search']").value.toLowerCase();
    let buscar = listaTrasaccion.filter(t => t.descripcion.toLowerCase().includes(search) || t.iva.toLowerCase().includes(search) || t.transaccion.toLowerCase().includes(search));
    return buscar
}

//Gestiona cuál radio btn fue seleccionado para aplicarle una class la cual resalta la opción
let seleccionado = () => {
    radioBtn.forEach(e => e.parentNode.classList.contains("active") ? e.parentNode.classList.replace("active", "inactive") : null)
    radioBtn.forEach(e => e.checked ? e.parentNode.classList.add("active") : null)
}

//----------------------------------------------------------------

//Organiza la lista por fecha - NO UTILIZADA
// let sortFecha = (arr) => {
//     let filtrado = listaTrasaccion.sort((a, b) => parseInt(b.fecha.replace(/-/g, "")) - parseInt(a.fecha.replace(/-/g, "")))
//     return filtrado
// }
