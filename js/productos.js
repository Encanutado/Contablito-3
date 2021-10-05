
  
document.addEventListener("DOMContentLoaded", function (e) {

  const formularioAgregar = document.getElementById("agregarProducto");


  formularioAgregar.addEventListener("submit", function (evento) {
    /*Evita que la pagina se recargue automaticamente.*/
    evento.preventDefault();
  //Variables utilizadas.
  //var nombreProducto = document.getElementById("Nombre").value;
  //var descripcionProducto = document.getElementById("descripcionProducto").value;
  let agregarImagen= "";
  agregarImagen += `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" id="imgItem" src="imgProductos/patricia.jpg" alt="Card image cap">
  <div class="text-center">
    <h4 class="nombreItem">cerveza</h4>
  </div>
</div>
 `         
        document.getElementById("principal").innerHTML += agregarImagen;
  
  
  
  
  });
});