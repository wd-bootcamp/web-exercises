# React Props: Buttons, Buttons, Buttons

Buttons are everywhere: a green submit button, a red danger button, a disabled button because you didn't fill in the form correctly...

And here is the magic: we can achieve this with just one button component using props! Let’s try it.

## Tasks

### 1. A Simple Button Component

Open the `./src/App.jsx` file: the `App` component currently returns a default heading element. Replace it with a custom `Button` component.

Your task is to create a `Button` component that takes three props: `color`, `disabled`, and `text`. It should render a button with the given text, color, and disabled state.

You can use the following hints as guidelines:

- Write a `Button` component inside the `src/App.jsx` file.
  - It accepts three props: `color`, `disabled`, and `text` (make sure to destructure them).
  - It returns an HTML button element which:
    - renders its text according to the `text` prop,
    - has its disabled attribute set according to the `disabled` prop, and
    - uses the `color` prop to set the text color of the button.

> 💡 Note: Use inline styling with the `style` attribute: `style={{height: "100px"}}`.

> 💡 Hint: If you want to set the background color via a prop, you need to use camelCase (`backgroundColor`) instead of kebab-case (`background-color`).

- In the return statement of your `App` component, replace the heading with your `Button` component and pass it the props as desired.

🎉 Congratulations, you've created a flexible button component!

However, clicking a button without anything happening is pretty useless, right? Let's fix that!

### 2. Adding a Click Event

Inside your `Button` component, use the `onClick` prop and pass it a `console.log()` with a message of your choice.

Use an anonymous function like `onClick={() => alert('You clicked me!')}` to ensure the code is executed when the button is clicked (and not with every render).

🎉 Congratulations, you've defined your first event handler in React!

### 3. Declare an Event Handler Function

By now, you've defined the event handler inline in JSX (something like `onClick={() => alert('You clicked me!')}`). Let's extract this logic into a separate event handler function and pass the function to the `<button>` element.

- Inside the `Button` component, create a function `handleClick` that calls the same `console.log` you previously passed to the `<button>`'s `onClick` prop.
- Replace the anonymous function in the `<button>`'s `onClick` prop with the `handleClick` function. Make sure NOT to call `handleClick` directly.
- Check if the `console.log` still works. If not, double-check your syntax.

### 4. Pass a Function as a Prop

Finally, let's pass a function as a prop to the `Button` component.

- Move the `handleClick` function from the `Button` component to the `App` component.
- In the `App` component, pass the `handleClick` function as a prop called `onClick` to the `Button` component (hint: `onEventName={handleEventName}`).
- In the `Button` component, receive the `onClick` prop as a parameter.
- Pass the received `onClick` prop to the `<button>`'s `onClick` prop.

🎉 Congratulations, you've built a button component that can handle any function passed to it as a prop!

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
