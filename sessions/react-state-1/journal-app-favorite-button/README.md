# React State 1: Journal App with Favorite Button State

In this challenge, you will begin building a journal app, which will be expanded in future sessions. In this part, you’ll implement a favorite button to mark entries as favorites.

## Tasks

- Locate the `FavoriteButton` component.
- Replace the `isFavorite` boolean variable with a state variable.
  - Hint: Use the `useState` React hook to manage the state.
- Update the state to toggle when the favorite button is clicked.
  - Hint: Use the dispatcher function (setter function) returned by useState to toggle the current value.
  - Remember: You can toggle a boolean using the NOT operator `!`.

> 💡For now, only the icon will respond to the state change using conditional rendering:
`{isFavorite ? <StarFilled /> : <Star />}`. The favorite tab and the count of favorites will be implemented in future sessions.

Happy hacking!

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following command:

- `npm run dev` to start a development server
