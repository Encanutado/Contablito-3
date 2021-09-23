 let listaTrasaccion = [];
 let transaccion;
 let iva;

 document.addEventListener("DOMContentLoaded", (e) => {
     transaccion = document.querySelectorAll("input[name='transaccion']");
     iva = document.querySelectorAll("input[name='iva']");
     document.querySelector("form").addEventListener("submit", addTransaccion)
 });

 //Agrega una transacción en forma de objeto a la lista y la guarda en localStorage para utilizarlo en otro momento
 let addTransaccion = (e) => {
     e.preventDefault()
     let obj = {
         fecha: fecha(),
         descripcion: document.querySelector("input[name='descripcion']").value,
         transaccion: opcion(transaccion),
         precio: +document.querySelector("input[name='precio']").value,
         iva: opcion(iva),
     }
     listaTrasaccion.unshift(obj);
     localStorage.setItem("lista-transacciones", JSON.stringify(listaTrasaccion))
     return showTransaccion();
 }