class Producto{
    constructor(id,nombre,precio){
        this.id=id,
        this.nombre=nombre,
        this.precio=precio
    }
}

const RemeraF1 = new Producto(1,"RemeraF1", 1500)
const GorraF1 = new Producto(2,"GorraF1",900)
const BuzoF1 = new Producto(3,"BuzoF1",3500)
const TazaF1 = new Producto(4,"TazaF1",520)


function agregarCarro (){
    choise=parseInt(prompt(`Elije tu producto: ${RemeraF1.id}. ${RemeraF1.nombre},${GorraF1.id}. ${GorraF1.nombre}, ${BuzoF1.id}. ${BuzoF1.nombre},${TazaF1.id}. ${TazaF1.nombre}`))
    while(seguirComprando===true){
        if (choise===RemeraF1.id){
            carro=carro + RemeraF1.nombre+", "
            total= total+ RemeraF1.precio
        }else if (choise===GorraF1.id){
            carro=carro + GorraF1.nombre+", "
            total= total+ GorraF1.precio
        }else if (choise===BuzoF1.id){
            carro=carro + BuzoF1.nombre+", "
            total= total+ BuzoF1.precio
        }else if (choise===TazaF1.id){
            carro=carro + TazaF1.nombre+", "
            total= total+ TazaF1.precio
        }else{
            choise=prompt("Por favor ingresa un producto correcto")
        }
        decision = parseInt(prompt("desea seguir comprando 1.Si, claro. 2.No, es todo."))
        if(decision===1){
            choise = parseInt(prompt(`Elija un producto: ${RemeraF1.id}. ${RemeraF1.nombre},${GorraF1.id}. ${GorraF1.nombre}, ${BuzoF1.id}. ${BuzoF1.nombre},${TazaF1.id}. ${TazaF1.nombre}`))
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
    alert(`Usted acaba de comprar ${carro} por un total de: $${total}`)
}

let carro = " "
let total =0
let seguirComprando= true
let pagos

agregarCarro()
cuotas()