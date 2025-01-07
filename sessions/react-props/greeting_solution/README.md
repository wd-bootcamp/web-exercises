# React Props: Greeting

In React, components are reusable building blocks. However, to make them more dynamic and adaptable, we use props. Let’s learn how to use props to make components fully reusable!

## Tasks

### Create a Component with Props

Open the `./src/App.jsx` file: the `App` component currently returns a default heading element. Replace this element with a custom `Greeting` component, which renders a greeting based on its props.

You can use the following hints as guidelines:

- Write the `Greeting` component inside the `src/App.jsx` file:
  - It accepts a prop called `name` (make sure to destructure it).
  - It returns an HTML element that uses the `name` prop to render "Hello, [name]!".
- Replace the heading in the `App` component’s return statement with your `Greeting` component and pass it a `name` prop with a value of your choice.

### Conditional Rendering with Props

Enhance your `Greeting` component to show "Hello, Coach!" if the `name` prop matches the name of one of your coaches.

## Notes

- You only have to touch the `./src/App.jsx` file.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
