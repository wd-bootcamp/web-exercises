const rootElement = document.querySelector("[data-js='root']");

function App() {
  const appContainer = document.createElement("main");
  appContainer.classList.add("App");

  return appContainer;
}

const app = App();
rootElement.append(app);
