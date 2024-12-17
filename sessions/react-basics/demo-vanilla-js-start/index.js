const rootElement = document.querySelector("[data-js='root']");

function App() {
  const appContainer = document.createElement("main");
  appContainer.classList.add("App");

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "click with Vanilla JS ";
  button.addEventListener("click", () => console.log("Hello Vanilla JS Land"));

  appContainer.append(button);

  return appContainer;
}

const app = App();
rootElement.append(app);
