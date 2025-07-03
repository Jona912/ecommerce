 const productos = [
   { id: 1, nombre: "Mouse", precio: 5000 },
   { id: 2, nombre: "Teclado", precio: 8000 },
   { id: 3, nombre: "Monitor", precio: 35000 },
   { id: 4, nombre: "Auriculares", precio: 7000 }
 ];

 // Carrito de compras
 let carrito = [];

 // Elementos del DOM
 const listaProductos = document.getElementById("lista-productos");
 const listaCarrito = document.getElementById("lista-carrito");
 const totalElemento = document.getElementById("total");

 // Función: Mostrar productos en la página
 function mostrarProductos() {
   productos.forEach(producto => {
     const div = document.createElement("div");
     div.classList.add("producto");
     div.innerHTML = `
       <h3>${producto.nombre}</h3>
       <p>Precio: $${producto.precio}</p>
       <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
     `;
     listaProductos.appendChild(div);
   });
 }

 // Función: Agregar producto al carrito
 function agregarAlCarrito(id) {
   const producto = productos.find(p => p.id === id);
   carrito.push(producto);
   actualizarCarrito();
 }

 // Función: Actualizar visualmente el carrito
 function actualizarCarrito() {
   listaCarrito.innerHTML = "";
   let total = 0;

   carrito.forEach(item => {
     const li = document.createElement("li");
     li.textContent = `${item.nombre} - $${item.precio}`;
     listaCarrito.appendChild(li);
     total += item.precio;
   });

   totalElemento.textContent = total;
 }

 // Iniciar
 mostrarProductos();
