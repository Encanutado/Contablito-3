//Se encarga de recorrer los radio button para saber cuál fue seleccionado y retorna su valor
let opcion = (opciones) => {
  let opcion;
  opciones.forEach(e => e.checked ? opcion = e.value : null);
  return opcion;
}

//Objeto que contiene el valor del IVA que se esta aplicando, para facilitar su modificación a futuro
let ivas = {
  basico: 1.22,
  minimo: 1.1,
  exento: 1
}

//Muestra la lista de transacciones en pantalla
let showTransaccion = (arr = listaTrasaccion) => {
  let tabla = document.querySelector("tbody")
  tabla.innerHTML = ""
  for (let transaccion of arr) {
    tabla.innerHTML += `
      <tr>
        <td>${transaccion.descripcion}</td>
        <td>${transaccion.transaccion}</td>
        <td>${transaccion.precio}</td>
        <td>${transaccion.iva}</td>
        <td>${(transaccion.precio  * ivas[transaccion.iva]).toFixed(2)}</td>
        <td>${transaccion.fecha}</td>
      </tr>`
  }
}

//Crea la fecha actual al momento de ser llamada
let fecha = () => {
  let date = new Date();
  let fecha = {
    anio: date.getFullYear(),
    mes: date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
    dia: date.getDate < 10 ? "0" + date.getDate() : date.getDate()
  }
  return `${fecha.anio}-${fecha.mes}-${fecha.dia}`
}