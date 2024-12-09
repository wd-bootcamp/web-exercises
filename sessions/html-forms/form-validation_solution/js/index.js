console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  // Prevent page reload
  event.preventDefault();

  // Gather data from the form and log it to the console
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
