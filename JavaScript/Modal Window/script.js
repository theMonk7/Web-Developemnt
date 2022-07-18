"use strict";

// Selectors
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosedModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//helper functions
const hideOverlays = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnClosedModal.addEventListener("click", function () {
  hideOverlays();
});

overlay.addEventListener("click", function () {
  hideOverlays();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hideOverlays();
  }
});
