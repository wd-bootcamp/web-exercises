# Interactive Web Animations

## Tasks

This exercise focuses on implementing various **CSS and JavaScript-driven animations**. Your goal is to complete the four distinct animation challenges outlined below. For each section, you'll be provided with the basic HTML structure and some initial CSS, but the core animation logic and JavaScript interactivity will be up to you to implement.

**Important:** You must use **vanilla JavaScript** (no external libraries like jQuery) and leverage **CSS transitions and animations** where appropriate.

---

### Challenge 1: Card Background Fade

* **Goal:** Implement a smooth **background color fading** animation on a card element.
* **Interaction:** When a button is clicked, the background color of the card should change to a new color with a smooth fading effect.
* **Hints:**
  * Use CSS `transition` on the `background-color` property for the fading effect.
  * In JavaScript, select the card and button elements.
  * Add an **event listener** to the button.
  * Define an array of different colors. On each click, update the card's `background-color` style property to the next color in your array.

---

### Challenge 2: Button Hover Size Change

* **Goal:** Make a button grow slightly when a user hovers over it.
* **Interaction:** When the mouse cursor hovers over the button, it should smoothly **increase in size**. When the cursor leaves, it should return to its original size.
* **Hints:**
  * This can be achieved entirely with **CSS**.
  * Use the `:hover` pseudo-class for the button.
  * Apply a `transform: scale()` property to change its size.
  * Use a CSS `transition` on the `transform` property for a smooth animation.

---

### Challenge 3: Loading Spinner Toggle

* **Goal:** Implement a **loading spinner** that appears and disappears.
* **Interaction:** When a button is clicked, a spinning loader should become visible. When the button is clicked again, the loader should disappear.
* **Hints:**
  * The loader itself can be created using CSS `border-radius` and `border` properties to form a circle.
  * Use **CSS `@keyframes`** and the `animation` property to make the loader spin continuously.
  * In JavaScript, select the button and the loader container.
  * Use an **event listener** on the button to toggle a CSS class (e.g., `active`) on the loader container.
  * Use CSS `opacity` and `visibility` properties with a `transition` on the loader container to control its fade-in/fade-out appearance.

---

### Challenge 4: Slide-in Div

* **Goal:** Make a `div` element **slide in from the right side** of its container.
* **Interaction:** When a button is clicked, a hidden `div` should smoothly slide into view from the right. Clicking again should slide it back out.
* **Hints:**
  * The parent container of the sliding div should have `overflow: hidden;` to hide the div when it's outside.
  * Initially, position the sliding `div` outside the view to the right using CSS `transform: translateX()`.
  * Use a CSS `transition` on the `transform` property for the sliding animation.
  * In JavaScript, use an **event listener** on the button to toggle a CSS class (e.g., `active`) on the sliding `div`. When the `active` class is present, change its `transform` to bring it into view.

---

## Notes

* You will be provided with the initial HTML and CSS structure. Your primary focus is on adding the necessary CSS transitions/animations in `/css/styles.css` and the JavaScript logic to trigger them in `./index.js`.
* Ensure your animations are smooth and user-friendly.

---

## Development

To work locally, you would typically install dependencies using `npm i` first (though for this specific exercise, it's a single HTML file, so you might just open it directly).

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively, you can use the Live Preview Extension for Visual Studio Code to view this project. Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

You can use `npm run test` to run any provided tests (if applicable for a larger project, but not directly relevant for this standalone HTML file).
