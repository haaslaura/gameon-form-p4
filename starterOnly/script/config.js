/*******************************************************

This file contains the global variables for the project

*******************************************************/

// DOM Modal Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const contentModal = document.querySelector(".content");
const closeBtn = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");

// DOM Confirmation Modal Elements
const confirmationBody = document.querySelector(".confirmation-body");
const closeConfirmationBtn = document.querySelector(".btn-close-confirmation");

// DOM Form Elements
const form = document.querySelector("form")

// Regular expression to check the email
let regexMail = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]{2,}$", "i");