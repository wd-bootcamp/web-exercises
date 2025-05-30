/*  -----------------------------------------------------------
            Challenge 1: Card Background Fade
---------------------------------------------------------------- */

const changeColorButton = document.getElementById('changeColorButton');
const colorChangeCard = document.getElementById('colorChangeCard');
const colors = ['#e0f7fa', '#ffe0b2', '#c8e6c9', '#ffccbc', '#d1c4e9']; // Light pastel colors
let currentColorIndex = 0;

changeColorButton.addEventListener('click', () => {
	// Add your solution below
	currentColorIndex = (currentColorIndex + 1) % colors.length;
	colorChangeCard.style.backgroundColor = colors[currentColorIndex];
});

/*  -----------------------------------------------------------
            Challenge 2: Button Hover Size Change
---------------------------------------------------------------- */

// No JavaScript needed as CSS :hover pseudo-class handles the animation.
// We included a basic click active state for completeness.

/*  -----------------------------------------------------------
            Challenge 3: Loading Spinner Toggle
---------------------------------------------------------------- */
const toggleLoaderButton = document.getElementById('toggleLoaderButton');
const loaderContainer = document.getElementById('loaderContainer');
let loaderActive = false;

toggleLoaderButton.addEventListener('click', () => {
	// Add your solution below
	loaderActive = !loaderActive;
	if (loaderActive) {
		loaderContainer.classList.add('active');
	} else {
		loaderContainer.classList.remove('active');
	}
});

/*  -----------------------------------------------------------
            Challenge 4: Slide-in Div
---------------------------------------------------------------- */
const slideInButton = document.getElementById('slideInButton');
const slideInBox = document.getElementById('slideInBox');
let slideInBoxActive = false;

slideInButton.addEventListener('click', () => {
	// Add your solution below
	slideInBoxActive = !slideInBoxActive;
	if (slideInBoxActive) {
		slideInBox.classList.add('active');
	} else {
		slideInBox.classList.remove('active');
	}
});
