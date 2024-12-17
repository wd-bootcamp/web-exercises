import { Button } from "./components/Button.js";

const rootElement = document.querySelector("[data-js='root']");

function App() {
  const appContainer = document.createElement("main");
  appContainer.classList.add("App");

  const buttonOne = Button();
  const buttonTwo = Button();

  appContainer.append(buttonOne, buttonTwo);

  return appContainer;
}

const app = App();
rootElement.append(app);
