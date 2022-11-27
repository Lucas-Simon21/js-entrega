class Producto {
  constructor(id, nombre, precio, stock, imagen, texto) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen
    this.texto = texto
  }
  restaStock() {
    this.stock = --this.stock;
    console.log(
      `Gracias por comprar tu ${this.nombre}, hemos actualizado el Stock`
    );
  }
}

//Productos
const producto1 = new Producto(0, "Remera F1", 1500, 20, "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2022-team-charles-leclerc-t-shirt_ss4_p-13300626+u-cu7zp6f3tjc6yh8v2srz+v-e71a9545e7c24bcdb0f6de8c3c689ab2.jpg?_hv=2&w=900", "antes <del>$3000</del>");
const producto2 = new Producto(1, "Gorra F1", 900, 50, "https://images.footballfanatics.com/red-bull/oracle-red-bull-racing-2022-team-sergio-perez-baseball-cap_ss4_p-13300657+u-4brdoe86llpzz1nbnr6r+v-56386c2b9ada403089e4d4004cdb6b45.jpg?_hv=2&w=900","antes <del>$1500</del>");
const producto3 = new Producto(2, "Buzo F1", 3500, 15, "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2022-team-hooded-sweat_ss4_p-13300658+u-136dva5ju3itgggp2gru+v-80f8108f64c844bfbeff9496306135f4.jpg?_hv=2&w=900","antes <del>$5000</del>");
const producto4 = new Producto(3, "Taza F1", 520, 100, "https://d2r9epyceweg5n.cloudfront.net/stores/001/399/999/products/taza-1181-fe398baef4223960e516161957787909-1024-1024.png","antes <del>$850</del>");
const producto5 = new Producto(4, "Reloj F1", 280, 10, "https://testorelli.com/wp-content/uploads/2021/09/F5033D-e1572530356893.jpg","antes <del>$500</del>");
const producto6 = new Producto(5, "Sweater F1", 2200, 5, "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-christmas-jumper_ss4_p-13370266+u-q2iloef4zluhqqr127lk+v-375af27a88ba4533baa62240fc7ee071.jpg?_hv=2&w=900","antes <del>$3500</del>");
const producto7 = new Producto(6, "Mochila F1", 990, 25, "https://images.footballfanatics.com/alphatauri/scuderia-alphatauri-team-backpack_ss4_p-12037681+pv-2+u-1bp2hk5be21bi6fq2kh3+v-b2a62f0cdd8b4f68a49197fdbca85580.jpg?_hv=2&w=900","antes <del>$1100</del>");
const producto8 = new Producto(7, "Llavero F1", 90, 42, "https://images.footballfanatics.com/formula-1-merchandise/formula-1-crest-keyring_ss4_p-13336338+u-2misv3h64f1lq426tysg+v-fb196d6b0b4242ea91a0f87df37a977a.jpg?_hv=2&w=900","antes <del>$200</del>");

//Array Productos
const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
];

// const carrito = [];
// const numeros = [1, 2, 3];

// // Creamos el prompt para que seleccione el producto:

// let productosOfrecidos = "Tenemos para ofrecerle: (99 para Finalizar) \n";

// // Creamos la función que va a recorrer nuestros productos para que mostrarlos en el prompt

// function agregaCarrito() {
//   productos.forEach((producto) => {
//     productosOfrecidos += `
//       ${producto.id}) ${producto.nombre} a: $${producto.precio}
//       `;
//   });

//   // Guardamos lo ingresado en un prompt

//   let respuesta = parseInt(prompt(productosOfrecidos));

//   // Creamos un ciclo que evalue si es un numero y en el caso de q no lo sea le volvemos a mostrar el prompt
//   while (isNaN(respuesta)) {
//     alert("Ingrese solo numeros");
//     let respuesta = parseInt(prompt(productosOfrecidos));
//   }

//   while (respuesta != 99) {
//     switch (respuesta) {
//       case 0:
//         carrito.push(productos[0]);
//         alert(`agregamos al carrito el producto ${productos[0].nombre}`);
//         break;
//       case 1:
//         carrito.push(productos[1]);
//         alert(`agregamos al carrito el producto ${productos[1].nombre}`);
//         break;
//       case 2:
//         carrito.push(productos[2]);
//         alert(`agregamos al carrito el producto ${productos[2].nombre}`);
//         break;
//       case 3:
//         carrito.push(productos[3]);
//         alert(`agregamos al carrito el producto ${productos[3].nombre}`);
//         break;

//       default:
//         alert("No tenemos el producto que elegiste");
//         break;
//     }
//     respuesta = parseInt(prompt(productosOfrecidos));
//   }
//   alert("Cerramos tu pedido");
//   mostrarCarrito();
// }

// //
// let productosCarrito = "Vas a llevar:";
// let precioCarrito = 0;
// agregaCarrito();

// function mostrarCarrito() {
//   carrito.forEach((itemsElegidos) => {
//     productosCarrito += `\n - ${itemsElegidos.nombre}`;
//     precioCarrito += itemsElegidos.precio;
//   });

//   alert(
//     `Repasemos \n ${productosCarrito} \n por un total de: $${precioCarrito}`
//   );
// }

// // find()
// const buscarproducto = productos.find((e) => e.id === 1);
// alert(
//   `En tu proxima compra usando el codigo: codfalso. Tienes un 50% de descuento en ${buscarproducto.nombre}.`
// );

//Buscamos Elementos

const divproductos = document.getElementById(`divproductos`);
productos.forEach((producto) => {
  divproductos.innerHTML += `<div id="${producto.id}" class="card" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.texto}</p>
    <P class="card-text">$${producto.precio}</p>
    <button id=${producto.id} class="btn btn-primary carrito">Agregar Producto</button>
  </div>
</div>
  `;
});

//Carrito
const carritostorage = JSON.parse(localStorage.getItem(`carrito`));
if (carritostorage) {
  carrito = carritostorage;
} else {
  carrito = [];
}

const botonagregar = document.querySelectorAll(".carrito");

botonagregar.forEach((boton) => {
  boton.onclick = () => {
    const productoseleccionado = productos.find(
      (e) => e.id === parseInt(boton.id)
    );
    // console.log (productoseleccionado)

    const productocarrito = { ...productoseleccionado, cantidad: 1 };

    const indexcarrito = carrito.findIndex(
      (prod) => prod.id === productocarrito.id
    );
    if (indexcarrito === -1) {
      carrito.push(productocarrito);
    } else {
      carrito[indexcarrito].cantidad++;
    }

    //agregar carrito a storage
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    console.log(carrito);
  };
});

//Terminar Compra
const botonterminar = document.querySelector(`#finalizar`);
botonterminar.onclick = () => {
  const valores = carrito.map((prod) => prod.precio * prod.cantidad);
  let totalcompra = 0;
  valores.forEach((valor) => {
    totalcompra += valor;
  });
  console.log(valores);
  console.log(totalcompra);
};
