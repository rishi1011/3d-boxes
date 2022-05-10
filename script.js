const boxes = document.getElementById('boxes');
const button = document.getElementById('magic');

button.addEventListener('click', () => {
    boxes.classList.toggle('big');
});

window.addEventListener('resize', createBoxes);

function createBoxes() {
    boxes.innerHTML = '';

    let boxSize = document.body.clientWidth > 580 ? 125 : 85;

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * boxSize}px ${-i * boxSize}px`;
            boxes.appendChild(box);
        }
    }
}

createBoxes()

