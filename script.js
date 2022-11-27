class Producto {
    constructor(id, nombre, precio, stock) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
    restaStock() {
      this.stock = --this.stock;
      console.log(
        `Gracias por comprar tu ${this.nombre}, hemos actualizado el Stock`
      );
    }
  }
  
  const producto1 = new Producto(0, "RemeraF1", 1500, 20);
  const producto2 = new Producto(1, "GorraF1", 900, 50);
  const producto3 = new Producto(2, "BuzoF1", 3500, 15);
  const producto4 = new Producto(3, "TazaF1", 520, 100);
  
  const productos = [producto1, producto2, producto3, producto4];
  const carrito = [];
  const numeros = [1, 2 ,3];
 
  
  // Creamos el prompt para que seleccione el producto:
  
  let productosOfrecidos = "Tenemos para ofrecerle: (99 para Finalizar) \n";
  
  // Creamos la función que va a recorrer nuestros productos para que mostrarlos en el prompt
  
  function agregaCarrito() {
    productos.forEach((producto) => {
      productosOfrecidos += `
      ${producto.id}) ${producto.nombre} a: $${producto.precio}
      `;
    });
  
    // Guardamos lo ingresado en un prompt
  
    let respuesta = parseInt(prompt(productosOfrecidos));
  
    // Creamos un ciclo que evalue si es un numero y en el caso de q no lo sea le volvemos a mostrar el prompt
    while (isNaN(respuesta)) {
      alert("Ingrese solo numeros");
      let respuesta = parseInt(prompt(productosOfrecidos));
    }
  
    while (respuesta != 99) {
      switch (respuesta) {
        case 0:
          carrito.push(productos[0]);
          alert(`agregamos al carrito el producto ${productos[0].nombre}`);
          break;
        case 1:
          carrito.push(productos[1]);
          alert(`agregamos al carrito el producto ${productos[1].nombre}`);
          break;
        case 2:
          carrito.push(productos[2]);
          alert(`agregamos al carrito el producto ${productos[2].nombre}`);
          break;
        case 3:
          carrito.push(productos[3]);
          alert(`agregamos al carrito el producto ${productos[3].nombre}`);
          break;
  
        default:
          alert("No tenemos el producto que elegiste");
          break;
      }
      respuesta = parseInt(prompt(productosOfrecidos));
    }
    alert("Cerramos tu pedido");
    mostrarCarrito();
  }

  
  //
  let productosCarrito = "Vas a llevar:";
  let precioCarrito = 0;
  agregaCarrito();
  
  function mostrarCarrito() {
    carrito.forEach((itemsElegidos) => {
      productosCarrito += `\n - ${itemsElegidos.nombre}`;
      precioCarrito += itemsElegidos.precio;
    });
  
    alert(
      `Repasemos \n ${productosCarrito} \n por un total de: $${precioCarrito}`
    );
  }

  // find()
  const buscarproducto = productos.find((e) => e.id === 1);
  alert(
    `En tu proxima compra usando el codigo: codfalso. Tienes un 50% de descuento en ${buscarproducto.nombre}.`
  );



























  





























