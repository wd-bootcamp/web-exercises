# React Arrays: Filter Animals by Habitat

In this challenge, you'll create a filter to display animals based on their habitat. 
You'll use two arrays provided in the `./src/App.jsx` file:

1. `animals`: an array of objects, where each object has the keys `id`, `name`, `habitat` and `emoji`.
2. `habitats`: an array of strings that lists all the possible habitats.

Currently, the `App` component only renders a heading. Your goal is to change this so that the app displays:

- A list of animals filtered by their habitat.
- Buttons for each habitat, which the user can click to filter the animals.

## Tasks

1. **Set Up State for Habitat**

- Create a `useState` variable to store the selected habitat.
- Initialize it with an empty string ("").

2. **Render Habitat Buttons**
- Use `.map()` on the `habitats` array to generate a button for each habitat.
- Each button should:
    - Have a key prop.
    - Include a `className` of `button` for styling. (This class is already defined)
    - Use an `onClick` event to set the selected habitat in state when clicked.

3. **Filter the Animals**
- Inside your `App` component, create a new variable that stores the animals to display.
- Use `.filter()` to include only those animals where the habitat matches the selected habitat in state.

4. **Display the Animals**
- Use `.map()` to render a list of the filtered animals in your JSX.
- Each animal should be a list item that display its `name` and `emoji`.
> The elements ul and li already have some basic styling.

## Bonus: Highlight the Selected Button

- Update the button's `className` to visually indicate when it's selected.
- Set the button's background color to `"lightblue"` if its habitat matches the selected habitat in state.

- Hint: You can make use of a ternary operator.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
