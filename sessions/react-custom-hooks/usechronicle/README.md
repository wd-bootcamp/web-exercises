# useChronicle

In this challenge we will enhance our useState with a value history to revert it to previous values. 🤯

## Tasks

In our small app we have 3 states for the `firstName`, `lastName` and `phoneNumber` input values. The form works as expected, but we want to implement 3 "undo" buttons which resets the respective input to its previous value. if a user types in `a`, then `b` and then `c`, the input value will be `abc`, after pressing the "undo" button, the value is reset to `ab`, another button press sets it back to `a`. 

- Open the file `src/hooks/useChronicle.js`.
- We want to create state, that remembers all previous values. Therefore, we need to create a list of values in chronological order. 
- Create a state `timeline` and set its initial value to an empty array `[]`.
- Create a function `setState` which takes a new value as an input and appends it to our timeline array (by using `setTimeline`).
- Create a function `resetState` which removes the last element from our timeline and updates our timeline state. Only remove the item if the timeline still contains 2 or more elements (Hint: use `array.slice`). 
- The last element in our timeline is the current value of the state, store it in a variable called `currentValue`. (Hint: you can use `array.at(-1)` to access the last value of an array).
- Our new hook now needs to return the `currentValue`, `setState` function and `resetState` function all in one array: `return [currentValue, setState, resetState]`.
- Our state should start with an initial value. Add a parameter to our hook called `initialValue` and add it as the first element of our `timeline` array when calling `useState`.
  
Now its time to replace the useState hooks in the `App.jsx` component with our shiny new `useChronicle` hook. 

- Make sure to also destructure the new third return value `resetState` (you can give it any name you like). It can look for example like this: 
  ```js
  const [firstName, setFirstName, undoFirstName] = useChronicle('');
  ```
- Use our `undoFirstName` function as the onClick callback for the first "undo" button.
- Use the other two reset functions from the other two `useChronicle` hooks on their respective "undo" buttons.

Now everything should work. If you press the undo button, the state should return to its previous value. Good Luck!


## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
