const button = document.querySelector('[data-js="button-position"]');

let position = 0;

button.addEventListener("click", () => {
  const newPosition = (position + 1) % 3; //Because 3 positions got defined in CSS
  button.classList.replace(`position--${position}`, `position--${newPosition}`);
  position = newPosition;
});
