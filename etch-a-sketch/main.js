// Get UI Elements
const sketchbook =  document.getElementById('sketchbook');

// Declare variables
let pixels, numPixels;
const div = '<div></div>';
let isDrawing = false;

numPixels = 1024;

// Add event listeners
sketchbook.addEventListener('mousedown', e => {
    if (e.target.classList.contains('pixel')) {
        e.target.classList.add('blue');
        isDrawing = true;
        console.log(`isDrawing: ${isDrawing}`);
    }

    e.preventDefault();
})

sketchbook.addEventListener('mouseup', e => {
    if (isDrawing) {
        isDrawing = false;
        console.log(`isDrawing: ${isDrawing}`);
    }

    e.preventDefault();
})

sketchbook.addEventListener('mousemove', e => {
    if (isDrawing) {
        e.target.classList.add('blue');
    }

    e.preventDefault();
})

// Declare functions
function createPixels() {
    const div = document.createElement('div');
    div.className = 'pixel';
    sketchbook.appendChild(div);
}

function displayPixels() {
    const div = document.createElement('div');
    div.className = 'pixel';
    sketchbook.style.gridTemplateColumns = `repeat(${Math.sqrt(numPixels)},1fr)`
    
    for (let i=0; i < numPixels; i++) {
        createPixels();
    }

}


displayPixels();
