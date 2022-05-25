// Get UI Elements
const sketchbook =  document.getElementById('sketchbook');
const pixels256 = document.getElementById('px256');
const pixels1024 = document.getElementById('px1024');
const pixels2916 = document.getElementById('px2916');
const pixels4900 = document.getElementById('px4900');
const $color = document.querySelector('input');
const $clearBtn = document.querySelector('.clear-btn');

// Declare variables
let pixels, numPixels, colorPaint;
let isDrawing = false;


// Add event listeners
$clearBtn.addEventListener('click', clearCanvas);

$color.addEventListener('click', (e) => {
    console.log(e.target.value)
})

pixels256.addEventListener('click', (e) => {
    clearPixels()
    numPixels = 256;
    displayPixels();
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.classList.contains('current-color')) {
            btn.classList.remove('current-color')
        }
    })

    e.target.classList.add('current-color');
})


pixels1024.addEventListener('click', (e) => {
    clearPixels()
    numPixels = 1024;
    displayPixels();
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.classList.contains('current-color')) {
            btn.classList.remove('current-color')
        }
    })
    e.target.classList.add('current-color');
})

pixels2916.addEventListener('click', (e) => {
    clearPixels()
    numPixels = 2916;
    displayPixels();
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.classList.contains('current-color')) {
            btn.classList.remove('current-color')
        }
    })
    e.target.classList.add('current-color');
})

pixels4900.addEventListener('click', (e) => {
    clearPixels()
    numPixels = 4900;
    displayPixels();
    document.querySelectorAll('.btn').forEach(btn => {
        if (btn.classList.contains('current-color')) {
            btn.classList.remove('current-color')
        }
    })
    e.target.classList.add('current-color');
})

sketchbook.addEventListener('mousedown', e => {
    if (e.target.classList.contains('pixel')) {
        colorPaint = $color.value;
        e.target.style.backgroundColor = colorPaint;
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
        colorPaint = $color.value;
        e.target.style.backgroundColor = colorPaint;
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
    sketchbook.style.gridTemplateColumns = `repeat(${Math.sqrt(numPixels)},1fr)`
    
    for (let i=0; i < numPixels; i++) {
        createPixels();
    }

    // Not every number of pixels is appropriate for this app. The formula that I used to find possible pixel numbers is: Math.sqrt(numPixels) % 2 === 0
}

function clearPixels() {
    sketchbook.innerHTML = '';
}

function clearCanvas() {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '#fff';
    })
}
