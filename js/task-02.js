const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredientsItems = (list) => {
  return list.map((element) => {
    const itemRef = document.createElement("li");
    itemRef.classList.add("item");
    itemRef.textContent = element;
    return itemRef;
  });
};

const items = createIngredientsItems(ingredients);

ingredientsList.append(...items);
