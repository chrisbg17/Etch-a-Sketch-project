const btn1 = document.getElementById('lvl1');
const btn2 = document.getElementById('lvl2');
const btn3 = document.getElementById('lvl3');
const btnp = document.getElementById('play');
const images = document.querySelectorAll('img');

// Initially hide all images
images.forEach(image => image.style.display = 'none');

// Disable buttons initially
btn1.disabled = true;
btn2.disabled = true;
btn3.disabled = true;

function playGame() {
    const input = parseInt(prompt('Vul in hoeveel biljetten je van de 10 hebt geïnvesteerd in zorg en welzijn (max 10):'), 10);

    // Validate the input
    if (isNaN(input) || input < 0 || input > 10) {
        alert('Voer een geldig getal in tussen 0 en 10.');
        return;
    }

    // Enable buttons based on the input
    if (input <= 2 || input > 2) {
        btn1.disabled = false;
        alert('Je hebt level 1 ontgrendeld!');
    }
    if (input >= 2 || input > 4) {
        btn2.disabled = false;
        alert('Je hebt level 2 ontgrendeld!');
    }
    if (input >= 4) {
        btn3.disabled = false;
        alert('Je hebt level 3 ontgrendeld!');
    }
}

// Show the image corresponding to the level
function showImage(level) {
    // Hide all images first
    images.forEach(image => image.style.display = 'none');
    
    // Show the image based on the level
    images[level - 1].style.display = 'block';
}

// Add event listeners
btnp.addEventListener('click', playGame);
btn1.addEventListener('click', () => showImage(1));
btn2.addEventListener('click', () => showImage(2));
btn3.addEventListener('click', () => showImage(3));
