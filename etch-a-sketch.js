let body = document.querySelector('body');
let container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    let squareSize = 400 / 16;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);

    square.addEventListener("mouseover", (e) => {
        e.target.style.background = "teal";
        square.style.opacity = (parseFloat(square.style.opacity) || 0) + 0.1;
    });
};

let gridButton = document.createElement('button');
gridButton.classList.add('gridButton');
gridButton.textContent = 'Click Here To Change Grid Size';

body.insertBefore(gridButton, container);

gridButton.addEventListener('click', () => {
    let userInput = prompt("Enter a new grid size: 4-100");

    if (!userInput || Number(userInput) > 100 || Number(userInput) < 4 || Number(userInput) === 0) {
        alert("Please enter a number 4-100");
    } else {
        container.innerHTML = "";

        for (let i = 0; i < userInput * userInput; i++) {
            let square = document.createElement('div');
            let squareSize = 400 / userInput;
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);

            square.addEventListener("mouseover", (e) => {
                e.target.style.background = "teal";
                square.style.opacity = (parseFloat(square.style.opacity) || 0) + 0.1;
            });
        };
    };
});