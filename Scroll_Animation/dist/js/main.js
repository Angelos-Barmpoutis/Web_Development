const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    let scrollHeight = window.innerHeight;
    let triggerHeight = scrollHeight * 0.8;

    boxes.forEach(box => {
        let boxHeight = box.getBoundingClientRect().top;

        if (boxHeight < triggerHeight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
    console.log(scrollHeight)


}