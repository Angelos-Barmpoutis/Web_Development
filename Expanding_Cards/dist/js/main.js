// Get UI Elements
const panels = document.querySelectorAll('.panel');

// Declare & assign Variables
const panelsList = panels;
let i = 1;

// Event Listeners

// This function adds click functionality. I prefer it automatic but with this function pictures can be changed manual as well.

// panels.forEach(panel => {
//     panel.addEventListener('click', e => {
//         if (e.target.classList.contains('active')) {
//             e.target.classList.remove('active');
//         } else {
//             clearPanels();
//             e.target.classList.add('active');
//         }
//     })
// })

// Define Functions
function clearPanels() {
    panels.forEach(panel => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
        }
    })
}


setInterval(() => {
    i++
    clearPanels()
    console.log(i-1)
    panelsList[i-1].classList.add('active');
    if (i === panelsList.length) {
        i = 0;
    }
}, 3000)