function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");
const numberInput = document.querySelector('[type="number"]');

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);
numberInput.addEventListener("blur", outputNumberValue);

let amount;

function outputNumberValue(event) {
  amount = Number(event.currentTarget.value);
  return amount;
}

const createBox = (widthOfBox, heigthOfBox) => {
  const box = document.createElement("div");
  box.style.height = `${heigthOfBox}px`;
  box.style.width = `${widthOfBox}px`;
  box.style.backgroundColor = getRandomHexColor();

  return box;
};

const boxesArray = [];

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    if (i === 0) boxesArray.push(createBox(width, height));
    else {
      width += 10;
      height += 10;
      boxesArray.push(createBox(width, height));
    }
  }
  boxesRef.append(...boxesArray);
}

function onCreateBtnClick(event) {
  createBoxes(amount);
}

function onDestroyBtnClick(event) {
  boxesRef.innerHTML = "";
  boxesArray.splice(0);
}
