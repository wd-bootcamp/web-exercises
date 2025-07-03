# useName

In this exercise you will create a simple custom hook for storing names with a first and last name.

## Tasks

We want to create a custom hook that has the following properties:

- it stores a full name as a single string
- has a function for setting the first name
- has a function for setting the last name

The hook should return three elements - the full name, the first name setter function and the last name setter function - in an array.

Take a look at `App.jsx` and `useName.js` and start coding. Good Luck!

Hints:

- Your custom hook needs two states, one for the first name, one for the last name.
- The full name can be created by combining the values of these two states (no third state needed!).
- Since we can only return one element with a Javascript function, we need to package the three elements that we need into a single array.
- Functions can be elements of an array, and you can destructure them from the array (see App.jsx).

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
