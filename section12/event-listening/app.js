let paragraphElement = document.querySelector('p');

function changeText() {
    paragraphElement.textContent = 'Clicked!';
}

paragraphElement.addEventListener('click', changeText);