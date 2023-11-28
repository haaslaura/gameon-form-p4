/*******************************************************

This file contains the function for project

*******************************************************/

// ??
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}


// Function to add a class to the modal if it exceeds the screen size
function calculateHeight() {
  if (contentModal.clientHeight >= window.innerHeight) {
    contentModal.classList.add("overflow");
  } else {
    contentModal.classList.remove("overflow");
  }
}


/*********************/
/*** OPENING MODAL ***/
/*********************/

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
  calculateHeight();
}

/*********************/
/**** CLOSE MODAL ****/
/*********************/

// Function for closing modal
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal at click event
closeBtn.addEventListener("click", () => {
  closeModal();
});

// Close modal at click outside the modal
modalbg.addEventListener("click", (event) => {
    // Check if the click is outside the modal
    if (event.target === modalbg) {
        closeModal();
    }
});


/*********************/
/** ERROR MESSAGES ***/
/*********************/

// Note : voir aussi pour ajouter un event blur si l'utilisateur quitte le champs ?

form.addEventListener ("submit", (event) => {
  // Prevent page reload
  event.preventDefault();  

  // Boucle pour récupérer la nodeList formData
  for (i = 0; i < formData.length; i++) {

    // Récupérer le type de l'input de chaque formData
    let typeInputCase = formData[i].querySelector("input").type;
    console.log(typeInputCase);

    // Récupérer la valeur de l'input de chaque formData    
    let valueInput = formData[i].querySelector("input").value;
    console.log(valueInput);

    // Création d'une expression régulière pour vérifier l'email
    let regexMail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");


    // Chaque erreur et le message à afficher

    // Les 2 champs text
    if (typeInputCase === 'text') {
      if (!valueInput){
        console.log("Le champs est vide");
        formData[i].setAttribute("data-error", "Le champs est vide.");
      } else if (valueInput.length <= 2){
        console.log("Erreur dans la longueur du champs texte");
        formData[i].setAttribute("data-error", "Entrez au moins deux caractères.");
      } else {
      console.log("Le champs texte est correcte");
      formData[i].removeAttribute("data-error");
      }
    }

    // Le champ Email
    if (typeInputCase === 'email') {
      if (!valueInput) {
        console.log("Erreur le champs mail est vide");
        formData[i].setAttribute("data-error", "Erreur le champs mail est vide.");
      } else if (regexMail.test(valueInput) === false) {
        console.log("Erreur ceci n'est pas un email");
        formData[i].setAttribute("data-error", "Erreur ceci n'est pas un email valide.");
      } else {
        console.log("Le mail est correct");
        formData[i].removeAttribute("data-error");
      }
    }

    // Champs Date de naissance
    if (typeInputCase === 'date') {
      const today = new Date();
      const selectedDate = new Date(valueInput);

      if (!valueInput) {
        console.log("erreur le champs date est vide");
        formData[i].setAttribute("data-error", "Erreur le champs date est vide.");
      } else if (selectedDate > today) {
        console.log("erreur la date est postérieure à aujourd'hui");
        formData[i].setAttribute("data-error", "Erreur la date est postérieure à aujourd'hui.");
      } else {
        console.log("le champs date est correct");
        formData[i].removeAttribute("data-error");
      }
    }

    // Champs nombre de tournois
    if (typeInputCase === 'number') {
      if (!valueInput) {
        console.log("Le champs nombre est vide");
        formData[i].setAttribute("data-error", "Erreur le champs nombre est vide.");
      } else if (valueInput > 99) {
        console.log("Erreur avec le champs nombre");
        formData[i].setAttribute("data-error", "Erreur, maximum à 99.");
      } else {
        console.log("Le champs nombre est correctement rempli");
        formData[i].removeAttribute("data-error");
      }
    }

    // Champs nombre de tournois
    if (typeInputCase === 'radio') {
      
      // Récupérer tous les éléments 'location'
      let locationInput = document.querySelectorAll('input[name="location"]');

      // Flag pour indiquer s'il y a une erreur
      let errorFlag = true;

      // Parcourir tous les éléments
      for (let r = 0; r < locationInput.length; r++) {

        if (locationInput[r].checked) {
          errorFlag = false; // S'il y a au moins un élément sélectionné, pas d'erreur
          break; // Sortir de la boucle dès qu'un élément est sélectionné
        }
      }
    
      if (errorFlag) {
        console.log("Aucune checkbox sélectionnée");
        formData[i].setAttribute("data-error", "Nous vous invitons à sélectionner un tournoi.");
      } else {
        console.log("Le champ tournois est correctement rempli");
        formData[i].removeAttribute("data-error");
      }
    }
  }

  // Checkbox conditions d'utilisation

  // On récupère la ckeckbox des CU par son ID
  let accepterCU = document.getElementById("checkbox1")
  // On récupère le label
  let labelCU = document.querySelector(".checkbox2-label")

  if (!accepterCU.checked) {
    console.log("La checkbox1 n'est pas cochée");
    labelCU.classList.add("error-cu");
    labelCU.setAttribute("data-error", "Vous devez accepter nos conditions d'utilisation pour continuer.");


  } else {
    console.log("La checkbox1 est bien cochée");

  }

  calculateHeight();
});