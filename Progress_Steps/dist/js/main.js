// Get UI Elements
const btnNext = document.querySelector('.btn-next');
const btnPrevious = document.querySelector('.btn-previous');
const progressBar = document.querySelector('.progress-bar');
const circles = document.querySelectorAll('.circle');

// Declare Variables
let level = 1;
const levels =
{
    1: '0%',
    2: '37%',
    3: '68%',
    4: '100%'
}

// Set Event Listeners
btnNext.addEventListener('click', e => {
    level++;
    progressBar.style.width = `${levels[level]}`;
    circles[level-1].classList.add('active');
    btnPrevious.removeAttribute('disabled');
    if (level === 4) {
        e.target.setAttribute('disabled','');
    }

    e.preventDefault();
})

btnPrevious.addEventListener('click', e => {
    console.log(level);
    level--
    progressBar.style.width = `${levels[level]}`;
    circles[level].classList.remove('active');
    btnNext.removeAttribute('disabled');
    if (level === 1) {
        e.target.setAttribute('disabled','');
    }

    e.preventDefault();
})
