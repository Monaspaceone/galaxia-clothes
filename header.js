document.addEventListener('DOMContentLoaded', function() {
    
    let header = `
        <div class="header-left">
            <span class="header__nav--anocoleccion" style="font-weight: 700; color: #ff6f6f;">Colección 2024</span>
            <a href="locales.html"> Locales</a>
            <a href="suscribite.html"> Suscribite</a> 
        </div>
        <div class="header-center">
            <h1 class="header-link"><a href="index.html">Galaxia</a></h1>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="header-right">
           
            <button id="botonPagar" onclick="pagar()">Pagar</button> <!-- Icono de bolsa de compras -->
            <button id="botonBorrar" onclick="limpiarCarrito()"><i class="fa-solid fa-trash"></i></button>

        </div>

     
    `;
  
    // Insertamos el HTML generado en el contenedor adecuado
    document.querySelector('.header').innerHTML = header;


});
