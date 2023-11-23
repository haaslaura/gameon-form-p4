function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* AJOUTS*/

// Récupérer le bouton
const closeBtn = document.querySelector(".close")

// Fonction pour fermer la modale
function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener("click", () => {
  closeModal()
})

// Ajout d'un événement click sur le document
modalbg.addEventListener("click", (event) => {
    // Vérifier si le clic est en dehors de la modal
    if (event.target === modalbg) {
        closeModal(); // Fermer la modal
    }
});