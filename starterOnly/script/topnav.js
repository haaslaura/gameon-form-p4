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