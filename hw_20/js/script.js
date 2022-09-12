const activeElement = document.querySelector('#element');
const activeForm = document.querySelector('#shapesForm');
const selectedShape = document.querySelector('#selectShape');
const chosenColor = document.querySelector('#inputColor');

const createShape = (event) => {
    event.preventDefault();
    activeElement.className = selectedShape.value;
    activeElement.style.background = chosenColor.value;
}


activeForm.addEventListener('submit',event=> createShape(event));
