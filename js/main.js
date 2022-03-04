var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elBtn = document.querySelector(".form__btn");
var elList = document.querySelector(".list");


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  var InputVal = elInput.value.trim();
  
  var elItem = document.createElement("li");
  elList.appendChild(elItem);
  elItem.textContent = InputVal;
  elInput.value = ""
})

