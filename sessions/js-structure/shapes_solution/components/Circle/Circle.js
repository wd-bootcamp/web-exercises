import { getRandomColor } from "../../utils/randomColor.js";

export default function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    let color = getRandomColor();
    circle.style.backgroundColor = color;
  });

  return circle;
}
