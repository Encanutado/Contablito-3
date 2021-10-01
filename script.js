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


/*
//borrar transaccion seleccionada
let borrar = (id) => {
  for (let i; i < listaTrasaccion.length; i++) {
    return listaTrasaccion[i].id === listaTrasaccion[i][id] ? listaTrasaccion.splice(i, 1) : null;
  }
}

//------------------------------------------| EN CONSTRUCCION |-------------------------------------------------
//classe que se va a utilizar con el metodo addTransaccion para crear un nuevo objeto con las propiedades

class Transaction {
  constructor(des, tran, iva, subTotal) {
    this.fecha = fecha();
    this.descripcion = des;
    this.transaccion = tran;
    this.subTotal = subTotal;
    this.iva = iva;
  }
}
class Producto {
  constructor(id, name, min, cost) {
    this.id = id;
    this.name = name;
    this.stockMin = min;
    this.stock;
    this.precio = cost;
  }
  setStock(cant) {
    this.stock = cant;
  }
  getStock() {
    return this.stock;
  }
}
let transacciones = {
  lista: [],
  balance = 0,
  addTransaccion: function (tran) {
    try {
      tran.transaccion === "compra" ? this.balance += tran : this.balance -= tran;
      this.listaTrasacciones.push(tran);
      return true
    } catch (error) {
      return console.log(error)
    }
  },
  getBalance: function () {
    return this.balance;
  },
  getLista: function () {
    return this.lista;
  }
}

listaTrasaccion = transacciones.getLista();


// //hace match con cualquir numero tanto decimal como entero que este antes de "kg"


let RegExpPeso = /\d+kg|\d+.\d+kg|\d+\skg|\d+.\d+\skg/ig

// //hace match con cualquier palabra que este dentro de la lista
let RegExpProducto = /[arroz-papa-zanahoria-tomate-lechuga]/ig
*/