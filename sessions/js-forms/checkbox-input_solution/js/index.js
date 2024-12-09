const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

// --v-- Bonus: Success message! --v--
const successMessageElement = document.querySelector('[data-js="success"]');

function hideSuccess() {
  successMessageElement.setAttribute("hidden", "");
}

function showSuccess() {
  successMessageElement.removeAttribute("hidden");
}
// --^-- Bonus: Success message! --^--

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();
// --v-- Bonus: Success message! --v--
hideSuccess();
// --^-- Bonus: Success message! --^--

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tosCheckbox.checked) {
    showTosError();
    // --v-- Bonus: Success message! --v--
    hideSuccess();
    // --^-- Bonus: Success message! --^--
    return;
  }

  hideTosError();
  // --v-- Bonus: Success message! --v--
  showSuccess();
  // --^-- Bonus: Success message! --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

/* Optional:
This is an example of how to dynamically show or hide the error message
based on the user's actions (checking or unchecking the box). */

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
