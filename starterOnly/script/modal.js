/*******************************************************

This file contains the function for project

*******************************************************/

// Function to switch to the burger menu
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
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

// Submit event
form.addEventListener ("submit", (event) => {
  event.preventDefault();
  displayErrorMessages();
  calculateHeight();
});


// Function to display error message
function displayErrorMessages() {

  // Retrieve the nodeList formData
  for (i = 0; i < formData.length; i++) {

    // For each FormData div, retrieve the input
    let typeInputCase = formData[i].querySelector("input").type;

    // For each input, retrive his value    
    let valueInput = formData[i].querySelector("input").value.trim();

    // List of errors and messages
    switch (typeInputCase) {
      // Text fields
      case 'text':
        if (!valueInput){
          console.log("Le champs est vide");
          formData[i].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
        } else if (valueInput.length < 2){
          console.log("Erreur dans la longueur du champs texte");
          formData[i].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
        } else {
        console.log("Le champs texte est correcte");
        formData[i].removeAttribute("data-error");
        }
        break;

      // Email field
      case 'email':
        // Regular expression to check the email
        let regexMail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
        if (!valueInput) {
          console.log("Erreur le champs mail est vide");
          formData[i].setAttribute("data-error", "Merci de nous indiquer votre email.");
        } else if (regexMail.test(valueInput) === false) {
          console.log("Erreur ceci n'est pas un email");
          formData[i].setAttribute("data-error", "Merci de nous indiquer un email valide.");
        } else {
          console.log("Le mail est correct");
          formData[i].removeAttribute("data-error");
        }
        break;

      // Date field
      case 'date':
        const today = new Date();
        const selectedDate = new Date(valueInput);

        if (!valueInput) {
          console.log("erreur le champs date est vide");
          formData[i].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
        } else if (selectedDate > today) {
          console.log("erreur la date est postérieure à aujourd'hui");
          formData[i].setAttribute("data-error", "Erreur: la date est postérieure à aujourd'hui.");
        } else {
          console.log("le champs date est correct");
          formData[i].removeAttribute("data-error");
        }
        break;
      
      // Tournament number field
      case 'number':
        if (!valueInput) {
          console.log("Le champs nombre est vide");
          formData[i].setAttribute("data-error", "Merci de compléter ce champs.");
        } else if (valueInput > 99) {
          console.log("Erreur avec le champs nombre");
          formData[i].setAttribute("data-error", "99 maximum.");
        } else {
          console.log("Le champs nombre est correctement rempli");
          formData[i].removeAttribute("data-error");
        }
        break;
      
      // Tournament choice field
      case 'radio':  
        // Retrieve 'location' elements
        let locationInput = document.querySelectorAll('input[name="location"]');

        // Indicate if there is an error
        let errorFlag = true;

        for (let r = 0; r < locationInput.length; r++) {
          if (locationInput[r].checked) {
            errorFlag = false; // If there is at least one item selected, no error
            break; // Exit the loop as soon as an item is selected
          }
        }

        if (errorFlag) {
          console.log("Aucune tournois sélectionnée");
          formData[i].setAttribute("data-error", "Vous devez choisir une option.");
        } else {
          console.log("Le tournois est correctement sélectionné");
          formData[i].removeAttribute("data-error");
        }
        break;

      // Conditions of use field
      case 'checkbox':
        // Retrieve CU checkbox by ID
        let accepterCU = document.getElementById("checkbox1")
        
        // Retrieve the label element
        let labelCU = document.querySelector(".checkbox2-label")

        if (!accepterCU.checked) {
          console.log("La checkbox1 n'est pas cochée");
          labelCU.classList.add("error-cu");
          labelCU.setAttribute("data-error", "Vous devez accepter nos conditions d'utilisation pour continuer.");
        } else {
          console.log("La checkbox1 est bien cochée");
          labelCU.classList.remove("error-cu");
          labelCU.removeAttribute("data-error");
        }
        break;
    }
  }
}

// Si tous les champs complétés et valider,
// activer fonction validate() au clic du bouton Submit


/*************************/
/* OPENING CONFIRMATION **/
/*************************/

// Launch modal confirmation event
submitBtn.addEventListener("click", validate)

// Launch confirmation modal
function validate() {
  modalBody.style.display = "none";
  confirmationBody.style.display = "block";
  //calculateHeight();
}

/***********************/
/* CLOSE CONFIRMATION **/
/***********************/

// Close modal confirmation at click event
closeConfirmationBtn.addEventListener("click", () => {
  closeModal();
});