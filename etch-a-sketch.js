let body = document.querySelector('body');
let container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    let initSquareSize = 400 / 16;
    square.style.width = `${initSquareSize}px`;
    square.style.height = `${initSquareSize}px`;
    container.appendChild(square);

    square.addEventListener("mouseover", (e) => {
        e.target.style.background = "teal";
    });
};

let gridButton = document.createElement('button');
gridButton.classList.add('gridButton');
gridButton.textContent = 'Click Here To Change Grid Size';

body.insertBefore(gridButton, container);

gridButton.addEventListener('click', () => {
    let userInput = prompt("Enter a new grid size: 4-100", "4-100");

    container.innerHTML = "";

    for (let i = 0; i < userInput * userInput; i++) {
        square = document.createElement('div');
        let squareSize = 400 / userInput;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);

        square.addEventListener("mouseover", (e) => {
            e.target.style.background = "teal";
        });
    };
});