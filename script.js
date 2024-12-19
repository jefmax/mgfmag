// Función para abrir el modal
function openModal(index) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const imageData = data.imageData[index]; // Obtener la información de la imagen seleccionada
      document.getElementById("modalImage").src = imageData.src; // Establecer la imagen en el modal
      document.getElementById("modalTitle").innerText = imageData.title; // Título de la imagen
      document.getElementById("modalDescription").innerText =
        imageData.description; // Descripción
      document.getElementById("modalFooter").innerText = imageData.footer; // Pie de página

      // Mostrar el modal
      document.getElementById("imageModal").style.display = "block";
    })
    .catch((error) => console.error("Error al cargar el archivo JSON:", error));
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Cerrar el modal al hacer clic fuera del área del modal
document
  .getElementById("imageModal")
  .addEventListener("click", function (event) {
    // Si el clic ocurre fuera del contenido del modal, cerramos el modal
    if (event.target === document.getElementById("imageModal")) {
      closeModal();
    }
  });

// Cerrar el modal al presionar la tecla Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Función para cargar las imágenes en la galería desde el JSON
document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const gridContainer = document.querySelector(".grid-container");
      data.imageData.forEach((item, index) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.title;

        const infoText = document.createElement("div");
        infoText.classList.add("info-text");
        infoText.setAttribute("onclick", `openModal(${index})`);

        const h3 = document.createElement("h3");
        h3.innerText = item.title;

        const p = document.createElement("p");
        p.innerText = item.footer;

        infoText.appendChild(h3);
        infoText.appendChild(p);
        imageContainer.appendChild(img);
        imageContainer.appendChild(infoText);

        gridContainer.appendChild(imageContainer);
      });
    })
    .catch((error) => console.error("Error al cargar las imágenes:", error));
});
