/*******************************************************

This file contains the function for project

*******************************************************/

// Function to open the burger menu
function editNav() {
  const x = document.getElementById("myTopnav");
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
  if (event.target === modalbg) {
    closeModal();
  }
});


/*************************/
/** CONFIRMATION MODALE **/
/*************************/

// Function for launch confirmation modal
function validate() {
  modalBody.style.display = "none";
  confirmationBody.style.display = "block";
}

// Event to close modal confirmation
closeConfirmationBtn.addEventListener("click", () => {
  closeModal();
});


/*********************/
/** ERROR MESSAGES ***/
/*********************/

// Function to display error message
function displayErrorMessages() {
  
  // Prepare to return a boleen
  let correct = true;

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
          correct = false;
          formData[i].setAttribute("data-error", "Merci de remplir ce champs.");
        } else if (valueInput.length < 2){
          correct = false;
          formData[i].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
        } else {
        formData[i].removeAttribute("data-error");
        }
        break;

      // Email field
      case 'email':
        if (!valueInput) {
          correct = false;
          formData[i].setAttribute("data-error", "Merci de nous indiquer votre email.");
        } else if (!regexMail.test(valueInput)) {
          correct = false;
          formData[i].setAttribute("data-error", "Merci de nous indiquer un email valide.");
        } else {
          formData[i].removeAttribute("data-error");
        }
        break;

      // Date field
      case 'date':
        const today = new Date();
        const selectedDate = new Date(valueInput);

        if (!valueInput) {
          correct = false;
          formData[i].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
        } else if (selectedDate > today) {
          correct = false;
          formData[i].setAttribute("data-error", "Erreur: la date est postérieure à aujourd'hui.");
        } else {
          formData[i].removeAttribute("data-error");
        }
        break;
      
      // Tournament number field
      case 'number':
        if (!valueInput) {
          correct = false;
          formData[i].setAttribute("data-error", "Merci de compléter ce champs.");
        } else if (valueInput > 99) {
          correct = false;
          formData[i].setAttribute("data-error", "99 maximum.");
        } else {
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
          correct = false;
          formData[i].setAttribute("data-error", "Vous devez choisir une option.");
        } else {
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
          correct = false;
          labelCU.classList.add("error-cu");
          labelCU.setAttribute("data-error", "Vous devez accepter nos conditions d'utilisation pour continuer.");
        } else {
          labelCU.classList.remove("error-cu");
          labelCU.removeAttribute("data-error");
        }
        break;
    }
  }
  calculateHeight();
  return correct;
}

/*********************/
/*** SUBMIT EVENT ****/
/*********************/

form.addEventListener ("submit", (event) => {
  calculateHeight();
  event.preventDefault();
  if(displayErrorMessages()) {
    validate();
  }
});