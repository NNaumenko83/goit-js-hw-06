const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  const outputValue =
    event.currentTarget.value === ""
      ? (output.textContent = "Anonymous")
      : (output.textContent = event.currentTarget.value);
  return outputValue;
}
