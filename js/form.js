var modallink = document.querySelector(".contact");
var modalform = document.querySelector(".modal-form");
var modalclose = modalform.querySelector(".modal-close");
var inputname = modalform.querySelector(".input-name");
var inputemail = modalform.querySelector(".input-email");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("input-name");
} catch (err) {
  isStorageSupport = false;
}
modallink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalform.classList.add("modal-show");
  if (storage) {
    inputname.value = storage;
    inputemail.focus();
  } else {
    username.focus();
  }
});
modalclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalform.classList.remove("modal-show");
});
modalform.addEventListener("submit", function(evt) {
  if (!inputname.value || !inputemail.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("input-name", inputname.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalform.classList.contains("modal-show")) {
      evt.preventDefault();
      modalform.classList.remove("modal-show");
    }
  }
});