class Producto{
    constructor(identificacion,nombre,precio,cantidadComprada){
        this.identificacion=identificacion,
        this.nombre=nombre,
        this.precio=precio
    }
}

const Computadora =new Producto(1,"Computadora", 1000)
const Celular=new Producto(2,"Celular",2200)
const Televisor=new Producto(3,"Televisor",800)
const Tablet=new Producto(4,"Tablet",500)
//Esta funcion sirve para sumar productos al carrito y almacena los items y el valor total de la compra
function agregarCarrito (){
    choise=parseInt(prompt(`Elija un producto: ${Computadora.identificacion}. ${Computadora.nombre},${Celular.identificacion}. ${Celular.nombre}, ${Televisor.identificacion}. ${Televisor.nombre},${Tablet.identificacion}. ${Tablet.nombre}`))
    while(seguirComprando===true){
        if (choise===Computadora.identificacion){
            carrito=carrito + Computadora.nombre+", "
            total= total+ Computadora.precio
        }else if (choise===Celular.identificacion){
            carrito=carrito + Celular.nombre+", "
            total= total+ Celular.precio
        }else if (choise===Televisor.identificacion){
            carrito=carrito + Televisor.nombre+", "
            total= total+ Televisor.precio
        }else if (choise===Tablet.identificacion){
            carrito=carrito + Tablet.nombre+", "
            total= total+ Tablet.precio
        }else{
            choise=prompt("Por favor ingresa un producto correcto")
        }
        decision = parseInt(prompt("desea sieguir comprando 1.Si 2.No"))
        if(decision===1){
            choise = parseInt(prompt(`Elija un producto: ${Computadora.identificacion}. ${Computadora.nombre},${Celular.identificacion}. ${Celular.nombre}, ${Televisor.identificacion}. ${Televisor.nombre},${Tablet.identificacion}. ${Tablet.nombre}`))
        }else if(decision===2){
            seguirComprando=false
        }else{
            decision=parseInt(prompt("desea sieguir comprando 1.Si 2.No"))
        }
    }
}
//esta funcion le da la opcion al comprador determinar el metodo de pago a elegir y devuelve un Alert con el resumen de la compra
function cuotas(){
    modoDePago = parseInt(prompt(`tu total es ${total}, como deseas pagarlo 1. efectivo 10% de descuento-${total*0.9},2.en un pago por trasnferencia o tarjeta ${total} 3. 3 cuotas sin interes de ${total/3}, 4. 12 cuotas con interes de${(total*1.5)/12}.`))
        if (modoDePago===1){
            pagos = "un pago en efectivo de $ "+total*0.9
        }else if (modoDePago===2){
            pagos = "un pago de $ "+ total
        }else if (modoDePago===3){
            pagos = "3 cuotas de $ " +total/3
        }else if (modoDePago===4){
            pagos = "12 cuotas de $"+(total*1.5)/12
        }else{
            modoDePago=prompt("Por favor ingresa un metodo de pago correcto")
            pago=true
        }
    alert(`Usted acaba de comprar ${carrito}, por un total de: $${total} su metodo de pago es:${pagos}`)
}

//inicio del programa

let carrito = " "
let total =0
let seguirComprando= true
let pagos

agregarCarrito()
cuotas()
alert("Muchas gracias por su compra vuelva pronto")