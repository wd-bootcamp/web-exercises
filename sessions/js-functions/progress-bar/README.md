# JS Functions: Progress Bar

Your task is to build a progress bar that visually indicates how much of the page the user has scrolled. Follow the instructions below to achieve this.

## Tasks

1. **Start with the CSS**

- Set the initial width of the progress bar to 0% in the `styles.css` file.
- The goal is for the progress bar to grow in width as the user scrolls down the page.

2. **Write the `calculateScrollPercentage` function**

- This function should calculate and return the percentage of the page that the user has scrolled.
- Use the following properties:
  - `window.scrollY`: The Y position of the window on the total webpage.
  - `window.innerHeight`: The height of the visible part of the window.
  - `document.body.clientHeight`: The total height of the webpage.

3. **Update the Progress Bar**

- Add an event listener for the `"scroll"` event on the `document`.
- Inside the event listener, call the `calculateScrollPercentage` function to calculate the current scroll percentage.
- Update the width of the progress bar using the calculated percentage.
  > 💡 You can change the width of an element like this: `element.style.width = '50%'`.

## Notes

- You only have to touch the `./js/index.js` and `./css/styles.css` files.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

### Scripts

You can use the following command:

- `npm run start` to start a development server
