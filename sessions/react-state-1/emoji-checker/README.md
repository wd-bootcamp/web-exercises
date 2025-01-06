# React State 1: Emoji Passcode Checker

In the `./src/App.jsx` file, you will find the basic structure for an emoji passcode checker.

- The `validCode` variable defines the passcode as a sequence of three emojis.
- Each button click should add one emoji to the input code. 
- If the entered code matches the passcode, it should be validated as correct.
- The reset button should clear the input code, allowing you to try again. 

> 💡 At the bottom of the `App` function, there is a line that conditionally renders a `<p>` element when the input code `inputCode` matches the valid passcode `validCode`.

## Tasks

You can follow these hints as a guideline:

- Import a built-in React function (react hook) that you will need for this challenge.
- Declare a state variable to store and keep track the current input code
- Implement the `handleClick` function to update the state variable based on the clicked emoji button..
  - Hint: Use string concatenation to append emojis to the end of the input code.
- Implement the reset button functionality to clear the input code and allow the user to start over.

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
