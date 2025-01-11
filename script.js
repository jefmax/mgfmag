// function modal
function openModal(index) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const imageData = data.imageData[index]; // get info image
      document.getElementById("modalImage").src = imageData.src; // img modal
      document.getElementById("modalTitle").innerText = imageData.title;
      document.getElementById("modalDescription").innerText =
        imageData.description;
      document.getElementById("modalFooter").innerText = imageData.footer;

      // Create the icons for the website and Instagram.
      const socialContainer = document.getElementById("modalSocial");
      socialContainer.innerHTML = ""; // Limpia contenido previo

      // Website icon
      if (imageData.social && imageData.social.website) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = imageData.social.website;
        link.target = "_blank";
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-globe";
        link.appendChild(icon);
        listItem.appendChild(link);
        socialContainer.appendChild(listItem);
      }

      // Instagram icon
      if (imageData.social && imageData.social.instagram) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = imageData.social.instagram;
        link.target = "_blank";
        const icon = document.createElement("i");
        icon.className = "fab fa-instagram";
        link.appendChild(icon);
        listItem.appendChild(link);
        socialContainer.appendChild(listItem);
      }

      // Behance icon
      if (imageData.social && imageData.social.behance) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = imageData.social.behance;
        link.target = "_blank";
        const icon = document.createElement("i");
        icon.className = "fab fa-behance";
        link.appendChild(icon);
        listItem.appendChild(link);
        socialContainer.appendChild(listItem);
      }

      // Youtube icon
      if (imageData.social && imageData.social.youtube) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = imageData.social.youtube;
        link.target = "_blank";
        const icon = document.createElement("i");
        icon.className = "fab fa-youtube";
        link.appendChild(icon);
        listItem.appendChild(link);
        socialContainer.appendChild(listItem);
      }

      // show modal
      document.getElementById("imageModal").style.display = "block";
    })
    .catch((error) => console.error("Error al cargar el archivo JSON:", error));
}

// close modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// other close modal
document
  .getElementById("imageModal")
  .addEventListener("click", function (event) {
    if (event.target === document.getElementById("imageModal")) {
      closeModal();
    }
  });

// other close modal Esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// loads JSON images
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
        img.setAttribute("onclick", `openModal(${index})`);

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
