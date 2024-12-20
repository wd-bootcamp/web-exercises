console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza1, pizzaSize1);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza2, pizzaSize2);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here

function calculatePizzaGain(diameter1, diameter2) {
  const pizzaArea1 = (diameter1 / 2) ** 2 * Math.PI;
  const pizzaArea2 = (diameter2 / 2) ** 2 * Math.PI;

  const pizzaGain = ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100;

  output.textContent = Math.round(pizzaGain);
}

// Task 2: Define the function `updatePizzaDisplay` here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `${newDisplaySize}px`;
}

// Task 3: Define the function `updateOutputColor` here

function updateOutputColor(size1, size2) {
  if (size1 <= size2) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}

// Alternative: Task 3
// function updateOutputColor(size1, size2) {
//   outputSection.style.backgroundColor = `var(${
//     size1 <= size2 ? "--green" : "--red"
//   }`;
// }
