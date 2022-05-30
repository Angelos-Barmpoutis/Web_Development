// Get UI Elements
const btnNext = document.querySelector('.btn-next');
const btnPrevious = document.querySelector('.btn-previous');
const progressBar = document.querySelector('.progress-bar');
const circles = document.querySelectorAll('.circle');

// Declare Variables
let level = 1;


// Set Event Listeners
btnNext.addEventListener('click', e => {
    level++;
    circles[level-1].classList.add('active');
    const actives = document.querySelectorAll('.active');
    // There are 4 steps in total but only 3 remaining since step 1 is already marked as active. So our step cant go up or down by 25%.By substracting 1 from each side I accomplished to change the proportion to the maximum of 3. For example If we are on step 1 and click the next button the progress bar will move by 1/3 of its total, 33%.
    progressBar.style.width = `${(actives.length -1) / (circles.length - 1) * 100}%`;
    btnPrevious.removeAttribute('disabled');
    if (level === 4) {
        e.target.setAttribute('disabled','');
    }

    e.preventDefault();
})

btnPrevious.addEventListener('click', e => {
    level--
    circles[level].classList.remove('active');
    const actives = document.querySelectorAll('.active');
    progressBar.style.width = `${(actives.length -1) / (circles.length - 1) * 100}%`;
    btnNext.removeAttribute('disabled');
    if (level === 1) {
        e.target.setAttribute('disabled','');
    }

    e.preventDefault();
})
