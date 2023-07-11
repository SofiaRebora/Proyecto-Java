const ArrayDeProductos = [];
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
if (ArrayCarrito === null) {
  ArrayCarrito = [];
}

let idUniversal = 1;

class Producto {
  constructor(id, nombre, precio, descripcion, categoria) {
    this.id = id;
    this.precio = precio;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;
  }
}

const bicicleta1 = new Producto(
  idUniversal++, "Bicicleta SLP 5PRO", 80000, "Rodado 29, color blanco","BICICLETAS"
);
ArrayDeProductos.push(bicicleta1);

const bicicleta2 = new Producto(
  idUniversal++,
  "Bicicleta SLP 100PRO",150000,"Rodado 29, color amarillo","BICICLETAS"
);
ArrayDeProductos.push(bicicleta2);

const bicicleta3 = new Producto(
  idUniversal++,"Bicicleta SLP LADY",105000,"Rodado 29, color violeta y negro","BICICLETAS"
);
ArrayDeProductos.push(bicicleta3);

const bicicleta4 = new Producto(
  idUniversal++,
  "Bicicleta RUTA SPEED",250000,"Rodado 28, color azul y amarillo","BICICLETAS"
);
ArrayDeProductos.push(bicicleta4);

const bicicleta5 = new Producto(
  idUniversal++,"Bicicleta OLMO",95000,"Rodado 29, color blanco y azul","BICICLETAS"
);
ArrayDeProductos.push(bicicleta5);

const bicicleta6 = new Producto(
  idUniversal++,"Bicicleta OLMO MUJER",110000,"Rodado 26, color turquesa","BICICLETAS"
);
ArrayDeProductos.push(bicicleta6);

const bicicleta7 = new Producto(
  idUniversal++,
  "Bicicleta BATTLE",100000,"Rodado 29, color rojo","BICICLETAS"
);
ArrayDeProductos.push(bicicleta7);

const bicicleta8 = new Producto(
  idUniversal++,
  "Bicicleta ORBEX MTB",185000,"Rodado 29, color turquesa","BICICLETAS"
);
ArrayDeProductos.push(bicicleta8);

const bicicleta9 = new Producto(
  idUniversal++,"Bicicleta NORDIC",120000,"Rodado 29, color negro","BICICLETAS"
);
ArrayDeProductos.push(bicicleta9);


// Función para agregar una bicicleta
function addBike() {
  var brand = prompt('Ingrese la marca de la bicicleta:');
  var model = prompt('Ingrese el modelo de la bicicleta:');
  var price = parseFloat(prompt('Ingrese el precio de la bicicleta:'));

  if (marca && modelo && !isNaN(precio)) {
    var newBike = {
      marca: marca,
      modelo: modelo,
      precio: precio
    };

    bikesData.push(newBike);
    showBikes();
  } else {
    alert('Ingrese datos válidos para la bicicleta.');
  }
}

// Evento de carga de página
window.addEventListener('load', function() {
  var addBikeButton = document.getElementById('addBikeButton');
  addBikeButton.addEventListener('click', addBike);

  showBikes();
});

ArrayDeProductos.forEach((el) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.innerHTML = ` 
                    <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                    <div class="tarjeta_informacion">
                        <span class="tarjeta_nombre">${el.nombre}</span>
                        <span class="tarjeta_precio">$${el.precio}</span>
                    </div>
    `;
  const buttonAgregar = document.createElement("button");
  buttonAgregar.innerText = "Agregar";
  buttonAgregar.addEventListener("click", () => {
    ArrayCarrito.push(el);
    localStorage.setItem("carrito", JSON.stringify(ArrayCarrito));
  });

  tarjeta.appendChild(buttonAgregar);
  app.appendChild(tarjeta);
});

const finalizarCompra = () => {
  // PRECESO DE PAGO
  //
  //|
  ArrayCarrito = [];
  localStorage.remove("carrito");
};