let carrito = 0;
let rem = 0;
let pant = 0;
let acc = 0;

while (true) {
    let comando = prompt("-1) Productos\n-2) Métodos de pago\n-3) Carrito\n-4) Salir");

    if (comando === "salir") {
        break;
    }

    comando = parseInt(comando);

    if (comando === 1) {
        let lista = parseInt(prompt("Agregar producto al carrito:\n-1) Remeras\n-2) Pantalones\n-3) Accesorios"));

        if (lista >= 1 && lista <= 3) {
            let eleccion = parseInt(prompt(`¿Desea agregar ${lista === 1 ? "'Remeras'" : lista === 2 ? "'Pantalones'" : "'Accesorios'"} al carrito?\n1) Si\n2) No`));

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
        let metodos = parseInt(prompt("Elija una opcion:\n1) Efectivo\n2) Tarjeta Debito\n3) Tarjeta Credito"));

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
        alert("Este comando no existe");
    }
}
