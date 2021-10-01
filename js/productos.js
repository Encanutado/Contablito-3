const formularioAgregar = document.getElementById("agregarProducto");



formularioAgregar.addEventListener("submit", function (evento) {
    /*Evita que la pagina se recargue automaticamente.*/
    evento.preventDefault();
  //Variables utilizadas.
  var nombreProducto = document.getElementById("Nombre").value;
  var descripcionProducto = document.getElementById("descripcionProducto").value;

  agregarHtml += `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  
    `
            
        document.getElementById("principal").innerHTML = agregarHtml;
  
  
  
  
  });