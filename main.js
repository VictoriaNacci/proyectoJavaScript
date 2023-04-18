let precio1;
let precio2;
let precio3;
let continuacion; // Variable que contiene la respuesta del usuario si quiere seguir comprando o no.
let idZapatilla1;
let idZapatilla2;
let idZapatilla3;
let operacion;
let codigoDescuento;
let codigo;
let precioFinal;
function suma (precio1, precio2, precio3) {
    operacion = parseFloat(precio1) + parseFloat(precio2) + parseFloat(precio3);
};

idZapatilla1 = prompt("Ingrese el ID del producto que desea");
do {
if (idZapatilla1 <= 3) {
    precio1 = prompt("Ingrese el importe del producto");
    continuacion = prompt("¿Desea continuar con la compra?"); // ¿continúo con un segundo producto? -------------
    if (continuacion != "no") {
        idZapatilla2 = prompt("Ingrese el ID del segundo producto");
        if (idZapatilla2 <= 3) {
            precio2 = prompt("Ingrese el importe del segundo producto");
            continuacion = prompt("¿Desea continuar con la compra?"); // ¿continúo con un tercer producto? ----------------
            if (continuacion != "no") {
                idZapatilla3 = prompt("Ingrese el ID del tercer producto");
                if (idZapatilla3 <= 3) {
                    precio3 = prompt("Ingrese el importe del tercer producto");
                ;suma(precio1, precio2, precio3); // Sumatoria de los productos.
                      alert(`El total a abonar es de: $${operacion} pesos`); // backticks para generar un "template string" >> altGr + }
                        codigoDescuento = prompt(`¿Posee algún código de descuento para el total anterior de ${operacion}?`);
                            if (codigoDescuento != "no") {
                                codigo = prompt("Ingrese su código de descuento");
                                    if (codigo != "ABCD") {
                                         prompt("Código de descuento invalido")
                                    } else {
                                        precioFinal = operacion * 0.15;
                                            alert(`El importe final con descuento es de $${precioFinal}`);
                                             break;
                                                }
                             }else {
                                alert(`El total a abonar es de: $${operacion} pesos`);
                                    }
                }else {
                    prompt("Ingrese un valor entre 1 y 3")
                    }
                }else{
                    suma(precio1, precio2, precio3)
                    alert(`El total a abonar es de: $${operacion} pesos`)
                }
            }else{
                prompt("Ingrese un valor entre 1 y 3")
            }
    }else{ suma(precio1, precio2, precio3)
    alert(`El total a abonar es de: $${operacion} pesos`)
    }
}else{
    prompt("Ingrese un valor entre 1 y 3")
}
}while(false);

