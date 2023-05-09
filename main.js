const productos = [
  {
    nombre: "Zapatilla1",
    precio: 10000,
    id: 1,
    stock: 10,
  },
  {
    nombre: "Zapatilla2",
    precio: 12000,
    id: 2,
    stock: 15,
  },
];

productos.push({ nombre: "Zapatilla3", precio: 11000, id: 3, stock: 5 });

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const comprarBotones = document.querySelectorAll(".producto button");
const carritoNav = document.getElementById("carrito-nav");
const carritoDiv = document.getElementById("carrito");
const cantidadCarritoSpan = document.getElementById("cantidadCarrito");

comprarBotones.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    agregarAlCarrito(productos[index]);
  });
});

carritoNav.addEventListener("click", (event) => {
  event.preventDefault();
  toggleCarrito();
});

function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

function actualizarCarrito() {
  cantidadCarritoSpan.innerText = carrito.length;
  renderCarrito();
}

function toggleCarrito() {
  carritoDiv.style.display = carritoDiv.style.display === "block" ? "none" : "block";
}

function borrarItem(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

function calcularTotal() {
  return carrito.reduce((total, item) => total + item.precio, 0);
}

function aplicarDescuento() {
  let codigoDescuento = prompt("Introduzca el código de descuento:");

  while (codigoDescuento !== "ABCD") {
    alert("Código de descuento incorrecto. Intente nuevamente.");
    codigoDescuento = prompt("Introduzca el código de descuento:");
  }

  const totalConDescuento = calcularTotal() * 0.9;
  carritoDiv.innerHTML += `<p>Total con descuento: $${totalConDescuento.toFixed(2)}</p>`;
}

function renderCarrito() {
  carritoDiv.innerHTML = carrito
    .map((item, index) => `<p>${item.nombre} - $${item.precio} <span class="eliminar-item" data-index="${index}">X</span></p>`)
    .join("");
  carritoDiv.innerHTML += `<p>Total: $${calcularTotal()}</p>`;
  carritoDiv.innerHTML += `<button id="descuentoBtn">Código de descuento</button>`;
  carritoDiv.innerHTML += `<p id="totalConDescuento"></p>`;
  addEventListenersEliminarItem();
  addEventListenerDescuentoBtn();
}

function addEventListenersEliminarItem() {
  const eliminarItemBtns = document.querySelectorAll(".eliminar-item");
  eliminarItemBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      borrarItem(index);
    });
  });
}

function addEventListenerDescuentoBtn() {
  const descuentoBtn = document.getElementById("descuentoBtn");
  descuentoBtn.addEventListener("click", aplicarDescuento);
}

actualizarCarrito();