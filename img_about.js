function cambiarImagen() {
  var image = document.getElementById("image");
  if (window.innerWidth <= 500) {
    image.src = "images/banner_about2.png"; // Cambia la imagen si el ancho es <= 400px
  } else {
    image.src = "images/banner_about.png"; // Vuelve a la imagen original
  }
}

// Ejecutar la función cuando la ventana se redimensione
window.addEventListener("resize", cambiarImagen);

// Llamar a la función al cargar la página
cambiarImagen();
