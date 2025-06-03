# Advanced Fetch

In this exercise you will enhance the `useFetch` hook from the session with a loading state as well as a simple `cache`.

## Tasks

Take a look at the project files. You find the code from the previous session. Let's start by adding a loading state to our `useFetch` hook.

### Loading State

We want to indicate to our users when the fetch process is active. We will do this by replacing the joke text with a `⏳` icon while the fetching isn't completed. 

- Add a second state called `isLoading` to our hook - a boolean which indicates whether the current fetch is ongoing or not.
- Change the return value such that the hook returns an object instead of just the data state value. The object contains 2 entries: `data` - the data state value and our `isLoading` state.
- Inside the `fetchData` function call set the `isLoading` state to `true` before calling `fetch` and set it back to `false` after the value state got updated with the newly fetched data.
- Go to the `App.jsx`. Since we changed the return value of our hook we need to adapt our code where we use it. Destructure the `data` and `isLoading` entries. Rename the `data` entry to `joke`:
  ```js
  const {data: joke, isLoading} = useFetch('...')
  ```
- Use the new `isLoading` value to display a `⏳` icon instead of the joke text when `isLoading` equals `true`.

### Caching

Let's implement a simple cache for our useFetch hook. We will use the url as the key to our cache to find the correct cached value.

- Add a third state to our `useFetch` hook called `cache`. Initialize it as an empty object.
- Inside the `fetchData` function after updating the value state, add a new entry to our cache. Use the current `url` as the key and the fetched data as the value. 
 
Hint: you can use the following syntax to use a variable as the key for an object:
```js
const variable = 'hello'
const cache = {
  [variable]: 1234
} // cache === {hello: 1234}
```
- Inside our useEffect, just before calling `fetchData`, check if our cache has an entry for the current url. If yes, set the value state to the cached value instead of calling `fetchData`.

Check out the App, if you return to a previously fetched joke you won't see any loading icon since we are using the cached value instead! 🤯

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
