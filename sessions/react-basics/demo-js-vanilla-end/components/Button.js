export function Button() {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "click with Vanilla JS";
  button.addEventListener("click", () => console.log("Hello Vanilla JS Land"));
  return button;
}
