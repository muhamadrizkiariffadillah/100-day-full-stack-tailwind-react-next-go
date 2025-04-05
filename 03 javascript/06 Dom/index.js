const heading = document.getElementById("title");
const items = document.getElementsByClassName("item");
const paragraph = document.getElementsByTagName("p");
const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");

console.log(heading.textContent);
console.log("items:", items);
console.log(paragraph);
console.log("firstItem:", firstItem);
allItems.forEach((item) => console.log("item:", item));

// Change element of content
document.getElementById("changeText").addEventListener("click", function () {
  document.getElementById("changeText").textContent = "text has been changed";
});

const link = document.createElement("a");
link.setAttribute("href", "javascript:alert('Hello');");
link.setAttribute("target", "_blank");
link.textContent = "Click here";
document.body.appendChild(link);

document.getElementById("changeColor").addEventListener("click", function () {
  const styleText = document.getElementById("styleText");
  styleText.style.color = styleText.style.color == "red" ? "black" : "red";
  styleText.style.fontSize = "20px";
});

document.getElementById("toggleClass").addEventListener("click", function () {
  document.getElementById("box").classList.toggle("highlight");
});

document.getElementById("addItem").addEventListener("click", function () {
  const newElement = document.createElement("p");
  newElement.textContent = "new element";
  document.getElementById("container").appendChild(newElement);
});

document.getElementById("deleteItem").addEventListener("click", function () {
  const contianer = document.getElementById("container");
  if (contianer.lastChild) {
    contianer.removeChild(contianer.lastChild);
  }
});
