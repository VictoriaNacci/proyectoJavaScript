const productos = [
    {
    nombre: "Zapatilla1",
    precio: 10.000,
    id: idZapatilla1,
    stock: 10,
    },
    {
        nombre: "Zapatilla2",
        precio: 12.000,
        id: idZapatilla2,
        stock: 15,
    }
]
productos.push({nombre:"Zapatilla3", precio:11.000, id:idZapatilla3, stock:5})
console.log(productos)
const suma = (valor1, valor2, valor3) => {
    return parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3);
  }
  
const descuento = (suma/0.15)

let idZapatilla1 = prompt("Ingrese el Id de la zapatilla que desea")
if (idZapatilla1 <= 3) {
    let precio1 = prompt("Ingrese el importe de la zapatilla")
    let continuacion
    do{
         continuacion = prompt("¿Desea continuar comprando?");
        if(continuacion != "no"){
            let idZapatilla2 = prompt("Ingrese el Id de la zapatilla que desea");
            if (idZapatilla2 <= 3) {
                let precio2 = prompt("Ingrese el importe de la zapatilla");
                let operacion = suma;
                alert("Su total es de "+ suma + " pesos por los productos " + idZapatilla1 + " y "+ idZapatilla2);
                    let codigoDescuento
                    do{
                        codigoDescuento = prompt("¿Posee algún código de descuento?");
                        if(codigoDescuento != "no"){
                            let codigo = prompt("Ingrese su código de descuento");
                            if (codigo != "ABCD"){
                                prompt("Código de descuento invalido")     
                            }else{
                                let operacion = descuento
                            alert("Su valor final es de" + descuento + " pesos");
                            break
                            }
                        }else{
                        alert("Su total es de "+ suma + " pesos por los productos " + idZapatilla1 + " y "+ idZapatilla2);  
                        }
                    }while(codigoDescuento != "no")
                    console.log(descuento)
            }else {
                prompt("Ingrese un valor entre 1 y 3")
            }
        }else{
            alert("Su total es de " + precio1 + " por el producto nro" + idZapatilla1)
        }
    }while(continuacion != "no")
        console.log ("continua la compra")
            }
else{
    prompt("Ingrese un valor entre 1 y 3")
}
// --------
