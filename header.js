document.addEventListener('DOMContentLoaded', function() {
    
    let header = `
        <div class="header-left">
            <span class="header__nav--anocoleccion" style="font-weight: 700; color: #ff6f6f;">Colección 2024</span>
            <span class="header__nav--vinculos"><a href="prod_hombres.html">Hombres</a></span>
            <span class="header__nav--vinculos"><a href="prod_mujeres.html">Mujeres</a></span>
            <span class="header__nav--vinculos"><a href="prod_ninos.html">Niños</a></span>
        </div>
        <div class="header-center">
            <h1 class="header-link"><a href="index.html">Galaxia</a></h1>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="header-right">
           
            
            <button id="botonPagar" onclick="pagar()">Pagar</button> <!-- Icono de bolsa de compras -->
            <button id="botonBorrar" onclick="limpiarCarrito()"><i class="fa-solid fa-trash"></i><button>

        </div>

        <!-- Menu Hamburguesa -->
        <div class="menu-hamburguesa">
            <i id="abrir" class="fa fa-bars"></i> <!-- Icono para abrir el menú -->
            <i id="cerrar" class="fa fa-times"></i> <!-- Icono para cerrar el menú -->
        </div>

        <!-- Menú desplegable oculto por defecto -->
        <div id="header-icon" class="menu-desplegable">
            <ul>
                <li><a href="prod_hombres.html">Hombres</a></li>
                <li><a href="prod_mujeres.html">Mujeres</a></li>
                <li><a href="prod_ninos.html">Niños</a></li>
                <li><a href="usuario.html">Usuario</a></li>
                <li><a href="me-gusta.html">Me gusta</a></li>
                <li><a href="compras.html">Compras</a></li>
            </ul>
        </div>
    `;
  
    // Insertamos el HTML generado en el contenedor adecuado
    document.querySelector('.header').innerHTML = header;

    // Seleccionamos los elementos necesarios
    const nav = document.querySelector("#header-icon");  // El menú
    const abrir = document.querySelector("#abrir");  // El botón para abrir el menú
    const cerrar = document.querySelector("#cerrar");  // El botón para cerrar el menú

    // Inicialmente, ocultamos el menú y el botón de cerrar
    cerrar.style.display = "none"; 

    // Cuando se haga clic en "abrir"
    abrir.addEventListener("click", () => {
        nav.classList.add("header-icon-links-visible");  // Mostrar el menú
        abrir.style.display = "none";  // Ocultar el ícono de abrir
        cerrar.style.display = "block";  // Mostrar el ícono de cerrar
    });

    // Cuando se haga clic en "cerrar"
    cerrar.addEventListener("click", () => {
        nav.classList.remove("header-icon-links-visible");  // Ocultar el menú
        abrir.style.display = "block";  // Mostrar el ícono de abrir
        cerrar.style.display = "none";  // Ocultar el ícono de cerrar
    });
});
