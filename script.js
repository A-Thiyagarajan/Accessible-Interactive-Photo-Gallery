// script.js
function initGallery() {
    const figures = document.querySelectorAll('figure');

    // Add tabindex to each figure
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute('tabindex', '0');
        console.log(`Tabindex added to figure ${i + 1}`);
    }

    // Add event listeners for mouse and keyboard events
    figures.forEach(figure => {
        // Mouse events
        figure.addEventListener('mouseover', showDetails);
        figure.addEventListener('mouseleave', hideDetails);

        // Keyboard events
        figure.addEventListener('focus', showDetails);
        figure.addEventListener('blur', hideDetails);
    });
}

// Function to show details when mouseover or focus occurs
function showDetails(event) {
    const figcaption = event.target.querySelector('figcaption');
    figcaption.style.display = 'block';
}

// Function to hide details when mouseleave or blur occurs
function hideDetails(event) {
    const figcaption = event.target.querySelector('figcaption');
    figcaption.style.display = 'none';
}
