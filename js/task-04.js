const decrementBtn = document.querySelector("[data-action=decrement]");
const inrementBtn = document.querySelector("[data-action=increment]");
const valueRef = document.querySelector("#value");

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

inrementBtn.addEventListener("click", function () {
  counterValue.increment();

  valueRef.textContent = counterValue.value;
});

decrementBtn.addEventListener("click", function () {
  counterValue.decrement();

  valueRef.textContent = counterValue.value;
});
