# React Data Fetching: Star Wars

In this challenge, you will fetch a character from the [Star Wars API](https://swapi.py4e.com/) with `SWR` and combine this with state to fetch different characters.

## Tasks

- Start the development server and make yourself familiar with the application.
- Open the browser: there are buttons for four characters, but only the first one (Luke Skywalker) is displayed.
- In your code editor, switch to `./src/components/Character/index.jsx`: it renders the `Card` component, but uses hard coded data.

### Fetching with `SWR`

Your task is to fetch a character from the [Star Wars API](https://swapi.py4e.com/). Use `SWR` to do so and implement a loading as well as an error state.

You can use the following hints as guideline:

- `SWR` is already installed, so you just have to import it.
- Switch to `./src/components/Character/index.jsx`:
  - fetch only the first character using https://swapi.py4e.com/api/people/1;
  - instead of the hard coded `/1`, interpolate the `id` variable.
  - implement a loading state;
  - to implement a proper error state based on an error object, you need to adapt the fetcher function [as explained in the SWR docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object).
- Adapt the return statement so that you pass the correct fetched data to the `Card` component.
- When you are done, reload the browser: it should now display the fetched data of Luke Skywalker.
  - Note: Because we declared the `id` variable with `1`, it's currently not possible to fetch another character by clicking the other buttons. We will fix this in the next step.

✨ Congratulations, you have fetched an API with the help of `SWR`!

### Choose the Character with State

By now, there is only one static character with the `id` `1`. Let's use state to fetch different characters when clicking the buttons!

- In `./src/App.jsx`, create a state `id` with the initial value `1`.
- Pass the `id` as a prop to the `Character` component and use it instead of the hard coded `const id = 1`.
- Update the `id` state when clicking a button. The characters have the following ids:
  - Luke Skywalker: `1`
  - C-3PO: `2`
  - R2-D2: `3`
  - Darth Vader: `4`
- Check the browser again: Luke Skywalker should still be displayed initially, while clicking another button should fetch and display the corresponding character.

## Notes

- You only have to touch the following files:
  - `./src/App.jsx`,
  - `./src/components/Character/index.jsx`.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run serve` to preview the production build
