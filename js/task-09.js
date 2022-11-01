function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const textColorValue = document.querySelector(".color");

btnChangeColor.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  textColorValue.textContent = getRandomHexColor();
}
