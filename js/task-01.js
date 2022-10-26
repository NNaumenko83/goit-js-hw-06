const itemsByClass = document.querySelectorAll(".item");

const quantityItemsByClass = itemsByClass.length;
console.log(`Number of categories: ${quantityItemsByClass}`);

itemsByClass.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  const itemsiInCategory = element.querySelectorAll("li");
  console.log(`Elements: ${itemsiInCategory.length}`);
});
