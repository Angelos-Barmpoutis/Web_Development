// Get UI Elements
const loadingText = document.querySelector('.loading-text');
const bgImage =  document.querySelector('.bg-image');

// Declare Variables
let counter = 0;

// Declare Functions
function loading() {
    let blur = 30;

    counter++

    loadingText.textContent = `${counter}%`;
    loadingText.style.backgroundColor = `rgba(0,0,0, ${1 - (counter / 100)})`;
    loadingText.style.opacity = `${0.75 - (counter / 100)}`;

    bgImage.style.filter = `blur(${blur - (counter / 100) * blur}px)`
    bgImage.style.transform =`scale(${2 - (counter / 100)})`;

    if (counter > 99) {
        loadingText.style.display = 'none';
        clearInterval(interval);
    }
}

let interval = setInterval(() => {
    loading();
},30)