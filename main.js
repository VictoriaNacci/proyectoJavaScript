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
    }
  ]
  productos.push({nombre:"Zapatilla3", precio:11000, id:3, stock:5});
  const carrito=[];
  const suma= (valor1, valor2, valor3) => {
    return valor1 + valor2 + valor3;
  };
  function mostrarProductos(){
    const id = parseInt(prompt("Ingrese el id del producto que desea \n" + productos.reduce((acc, el) => (acc += `${el.id} - ${el.nombre} \n`), "")
    ))
    if(id<1 || id>3){
      alert("lo siento, ingrese nuevamente")
      mostrarProductos()
    }else{
      const productoElegido = productos.find(p=> p.id === id)
      console.log(productoElegido)
      agregarAlCarrito(productoElegido);
      
    }
    function agregarAlCarrito(producto){
      carrito.push(producto);
      const otro = confirm("desea agregar otro producto al carrito?");
      if(otro){
        mostrarProductos();
      }else{
        calcularTotal()
        console.log(carrito)
      }
    }
  function calcularTotal(){
    const total = carrito.reduce((acc,el)=>acc += el.precio, 0);
    alert(total)
  }
  }
  mostrarProductos();
  
