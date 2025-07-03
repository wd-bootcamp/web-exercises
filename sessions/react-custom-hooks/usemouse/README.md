# useMouse

In this exercise you will create a custom hook that determines the mouse position on the screen.

## Tasks

Take a look into the project and open the `Cursor` component. This special cursor replaces the default page cursor but it needs to be synced with the actual mouse position.

- Open the `useMouse.js` file.
- This function should return the current position of the cursor as an array of two numbers `[x,y]`.
- Whenever the cursor moves, the value needs to be updated.
- Use the new custom hook in the Cursor component and replace the dummy position with the hook call `useMouse()`.

Hints:

- Write the following logic only inside the useMouse hook!
- You need a state for the cursor position, since the value needs to change.
- Within a useEffect, you can add an event listener to the body of the page with `document.body.addEventListener`.
- We want to listen to the `mousemove` event.
- Whenever the cursor position changes, the new position needs to be set as new state value.
- You can read the cursor position via the `mousemove` event object: `event.clientX`, `event.clientY`.

Good Luck!

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
