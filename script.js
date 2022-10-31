class Producto{
    constructor(identificacion,nombre,precio,cantidadComprada){
        this.identificacion=identificacion,
        this.nombre=nombre,
        this.precio=precio
    }
}

const Computadora =new Producto(1,"Computadora", 153000)
const Celular=new Producto(2,"Celular",62000)
const Televisor=new Producto(3,"Televisor",180000)
const Tablet=new Producto(4,"Tablet",52000)


function agregarCarrito (){
    choise=parseInt(prompt(`Elije tu producto: ${Computadora.identificacion}. ${Computadora.nombre},${Celular.identificacion}. ${Celular.nombre}, ${Televisor.identificacion}. ${Televisor.nombre},${Tablet.identificacion}. ${Tablet.nombre}`))
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
        decision = parseInt(prompt("desea seguir comprando 1.Si, claro. 2.No, es todo."))
        if(decision===1){
            choise = parseInt(prompt(`Elija un producto: ${Computadora.identificacion}. ${Computadora.nombre},${Celular.identificacion}. ${Celular.nombre}, ${Televisor.identificacion}. ${Televisor.nombre},${Tablet.identificacion}. ${Tablet.nombre}`))
        }else if(decision===2){
            seguirComprando=false
        }else{
            decision=parseInt(prompt("desea siguir comprando 1.Si, claro. 2.No, es todo"))
        }
    }
}


function cuotas(){
    modoDePago = parseInt(prompt(`Tu total es $${total}, ¿Como deseas pagarlo? 1. En Efectivo con un 10% de descuento, su total es: $${total*0.9} 2. En un pago por transferencia o tarjeta, su total es: $${total} 3. En 3 cuotas sin interes de $${total/3} cada una. 4. En 12 cuotas con interes de $${(total*1.4)/12} cada una.`))
        if (modoDePago===1){
            pagos = "un pago en efectivo de $"+total*0.9
        }else if (modoDePago===2){
            pagos = "un pago de $"+ total
        }else if (modoDePago===3){
            pago = "3 cuotas de $" + total/3
        }else if (modoDePago===4){
            pagos = "12 cuotas de $"+(total*1.4)/12
        }else{
            modoDePago=prompt("El metodo no es correcto, Por favor ingresa un metodo de pago correcto")
            pago=true
        }
    alert(`Usted acaba de comprar ${carrito} por un total de: $${total}`)
}

let carrito = " "
let total =0
let seguirComprando= true
let pagos

agregarCarrito()
cuotas()