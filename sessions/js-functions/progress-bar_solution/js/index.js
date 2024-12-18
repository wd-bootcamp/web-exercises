console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollYPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const webpageHeight = document.body.clientHeight;
  return (scrollYPosition / (webpageHeight - windowHeight)) * 100;
}

document.addEventListener("scroll", () => {
  const scrollPositionInPercentage = calculateScrollPercentage();
  progressBar.style.width = scrollPositionInPercentage + "%";
});

// Alternative:

/*
document.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage() + "%";
});

function calculateScrollPercentage() {
  const scrollPercentage =
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
  return scrollPercentage;
}
*/
