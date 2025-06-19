# CSS Structure: BEM

## Tasks

This websites is using components to structure the elements, but the CSS itself is not very coherent. Use the BEM class naming pattern to restructure the CSS. Keep in mind you need to add classes in the HTML as well!

Some general guidelines for using BEM:

- Every styled element inside a component needs a **class**, no type selectors!
- Every class name for a given component hast to start with the BLOCK name (the name of the component).
- Element names are separated with two underscores `__`, modifiers are prefixed with two dashes `--`.
- Modifier classes are added as a second class to the base element class. They modify the already existing element CSS, for example changing the background color. So they cannot stand on their own, but always appear together with their `BASE__ELEMENT` class.

> 💡 This example is quite small, therefore the upsides of BEM are not as visible as possible. In larger projects this naming pattern helps you to scope the css to the correct elements.

## Development

Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

> Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
> Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

### Scripts

You can use the following command:

- `npm run start` to start a development server
