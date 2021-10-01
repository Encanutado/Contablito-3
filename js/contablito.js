 let listaTrasaccion = [];
 let transaccion;
 let iva;
 let id = 0;

 document.addEventListener("DOMContentLoaded", (e) => {
     transaccion = document.querySelectorAll("input[name='products']");
     iva = document.querySelectorAll("input[name='iva']");
     document.querySelector("form").addEventListener("submit", addTransaccion)
 });

 //Agrega una transacción en forma de objeto a la lista y la guarda en localStorage para utilizarlo en otro momento
 let addTransaccion = (e) => {
     e.preventDefault()
     let obj = {
         id: id,
         fecha: fecha(),
         descripcion: document.querySelector("input[name='products']").value,
         transaccion: opcion(transaccion),
         precio: +document.querySelector("input[name='precio']").value,
         iva: opcion(iva),
     }
     id++
     listaTrasaccion.unshift(obj);
     localStorage.setItem("lista-transacciones", JSON.stringify(listaTrasaccion))
     return showTransaccion();
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
