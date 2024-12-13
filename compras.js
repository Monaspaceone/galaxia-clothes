let productos=[];
let total= 0; 


function agregarProducto(producto, precio){
    let carrito= document.getElementById("carrito");
    let productoItem = document.createElement("p");
    productoItem.textContent= producto;
    carrito.appendChild(productoItem);

    //Agrega producto al array
    productos.push({ nombre: producto, precio: precio});

    total+= precio;
    document.getElementById("botonPagar").textContent=`Pagar: $${total}`;

   window.pagar= function pagar() {
    //guardar datos en sessionStorage

    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('total', total);


    alert ("Total a pagar: $" + total); 
    window.location.href= "compra.html";

   }



   window.limpiarCarrito= function limpiarCarrito(){
    if(confirm("Vaciar Carrito?")) {
        productos=[];
        total= 0;
        document.getElementById("carrito").innerHTML="";
        document.getElementById("botonPagar").textContent= "Pagar";

        //limpia los datos de session
        localStorage.removeItem('productos');
        localStorage.removeItem('total');
    }
   }
}