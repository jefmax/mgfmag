function changeImagen() {
  var image = document.getElementById("image");
  if (window.innerWidth <= 500) {
    image.src = "images/banner_about2.png"; 
  } else {
    image.src = "images/banner_about.png"; 
  }
}


window.addEventListener("resize", changeImagen);


changeImagen();
