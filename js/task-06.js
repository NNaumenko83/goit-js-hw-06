const input = document.querySelector("#validation-input");

const requiredNumberOfSymbols = Number(input.getAttribute("data-length"));

input.addEventListener("blur", checkNumberOfSymbols);

function checkNumberOfSymbols(event) {
  const quantityOfsymbols = event.target.value;

  if (quantityOfsymbols.length === requiredNumberOfSymbols) {
    if (input.classList.contains("invalid")) {
      input.classList.replace("invalid", "valid");
    } else {
      input.classList.add("valid");
    }
  } else {
    if (input.classList.contains("valid")) {
      input.classList.replace("valid", "invalid");
    } else {
      input.classList.add("invalid");
    }
  }
}
