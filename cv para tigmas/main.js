let buttons = document.querySelectorAll('.leer-btn');
let textElements = document.querySelectorAll('.parrafo');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});
