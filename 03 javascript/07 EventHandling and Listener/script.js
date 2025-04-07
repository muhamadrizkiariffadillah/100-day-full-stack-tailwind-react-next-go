const btnClick = document.getElementById("btnClick");
const message = document.getElementById("message");

btnClick.addEventListener("click", function () {
  message.textContent = "After action";
});

const nameInput = document.getElementById("nameInput");
const outputName = document.getElementById("outputName");

nameInput.addEventListener("input", function (e) {
  outputName.textContent = `Hallo, ${e.target.value} `;
});

const form = document.getElementById("myForm");
const formInput = document.getElementById("formInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(`${formInput.value}`);
  formInput.value = "";
});

const square = document.getElementById("squareHover");

square.addEventListener("mouseover", function () {
  square.classList.add("hovered");
  square.textContent = "the hand is up";
});

square.addEventListener("mouseleave", function () {
  kotak.classList.remove("hovered");
  kotak.textContent = "Hover Me";
});
