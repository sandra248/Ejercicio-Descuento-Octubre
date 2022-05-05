let precioUnitario: number = Number(prompt("Ingrese el Precio del Producto"));
let cantidad: number = Number(prompt("Ingrese la cantidad del Producto"));

let compra: number = precioUnitario * cantidad;

let mesDeCompra: number = Number(prompt("Ingrese Mes de la compra"));

let descuento: number = 0.15;

if (mesDeCompra === 10) {
  console.log(
    "El monto de la compra a abonar por el cliente es de",
    compra - compra * descuento
  );
} else {
  console.log("El monto de la compra a abonar por el cliente es de", compra);
}
