console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollYPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const webpageHeight = document.body.clientHeight;
  return (scrollYPosition / (webpageHeight - windowHeight)) * 100;
}

document.addEventListener("scroll", () => {
  const scrollPosition = calculateScrollPercentage();
  progressBar.style.width = `${scrollPosition}%`;
});

// Alternative

/*
function calculateScrollPercentage() {
  const scrollPercentage =
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
  return scrollPercentage;
}
  
document.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage() + "%";
});
*/
