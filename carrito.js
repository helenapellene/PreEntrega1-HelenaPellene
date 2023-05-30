let carrito = 0;
let rem = 0;
let pant = 0;
let acc = 0;

while (true) {
    let comando = prompt("-1) PRODUCTOS DISPONIBLES\n-2) METODOS DE PAGO\n-3) VER CARRITO\n-0) SALIR");

    if (comando === "salir") {
        break;
    }

    comando = parseInt(comando);

    if (comando === 1) {
        let lista = parseInt(prompt("Agregar producto al carrito:\n-1) REMERAS\n-2) PANTALONES\n-3) ACCESORIOS"));

        if (lista >= 1 && lista <= 3) {
            let eleccion = parseInt(prompt(`¿Desea agregar ${lista === 1 ? "'REMERAS'" : lista === 2 ? "'PANTALONES'" : "'ACCESORIOS'"} al carrito?\n1) Si\n2) No`));

            if (eleccion === 1) {
                alert("Producto agregado al carrito....");
                carrito++;
                rem += (lista === 1) ? 1 : 0;
                pant += (lista === 2) ? 1 : 0;
                acc += (lista === 3) ? 1 : 0;
            } else if (eleccion === 2) {
                alert("Volviendo al principio....");
                continue;
            } else {
                alert("Error");
                continue;
            }
        } else {
            alert("Error");
            continue;
        }
    } else if (comando === 2) {
        let metodos = parseInt(prompt("Elija una opcion:\n1) EFECTIVO\n2) TARJETA DEBITO\n3) TARJETA CREDITO"));

        switch (metodos) {
            case 1:
                alert("Las compras en efectivo  se realizan en el local. No se aplican intereses sobre el precio base. ");
                break;
            case 2:
                alert("Con debito, a partir de una compra de $3000 tenes la opcion de 3 cuotas sin interes. ");
                break;
            case 3:
                alert("Con tarjeta de credito, dispones de hasta 12 cuotas sin interes con cualquiera de tus tarjetas. ");
                break;
            default:
                alert("Error");
                break;
        }
    } else if (comando === 3) {
        if (carrito === 0) {
            alert("Carrito vacio");
        } else {
            alert(`Productos agregados al carrito:\n${rem} Remeras\n${pant} Pantalones\n${acc} Accesorios`);
        }
    } else {
        alert("Has salido del menu");
    }
}
