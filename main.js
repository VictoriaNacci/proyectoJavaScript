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
                let operacion = parseInt(precio1) + parseInt(precio2);
                alert("Su total es de "+ operacion + " pesos por los productos " + idZapatilla1 + " y "+ idZapatilla2);
                    let codigoDescuento
                    do{
                        codigoDescuento = prompt("¿Posee algún código de descuento?");
                        if(codigoDescuento != "no"){
                            let codigo = prompt("Ingrese su código de descuento");
                            if (codigo != "ABCD"){
                                prompt("Código de descuento invalido")     
                            }else{
                                let descuento = operacion /4 
                            alert("Su valor final es de" + descuento + " pesos");
                            break
                            }
                        }else{
                        alert("Su total es de "+ operacion + " pesos por los productos " + idZapatilla1 + " y "+ idZapatilla2);  
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
