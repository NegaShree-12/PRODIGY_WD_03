let cells = document.querySelectorAll(".cell");
let turnIndicator = document.querySelector(".container .turn_indicator");
let preContainer = document.querySelector(".container .pre-container");
let resultBox = document.querySelector(".container .result-box");
let winnerMsg = document.querySelector(".container .result-box .winner-msg");
let changeturn = false;  

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (cell.innerHTML !== "") {
            return;  
        }

        
        if (changeturn == false) {
            cell.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            cell.setAttribute("data-player", "X");  
            turnIndicator.style.marginLeft = "150px";
            changeturn = true;
        } else {
            cell.innerHTML = '<i class="fa-solid fa-o"></i>';
            cell.setAttribute("data-player", "O");  
            turnIndicator.style.marginLeft = "0px";
            changeturn = false;
        }

        checkWinner();
        checkDraw();
    });
});


let wincombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

let checkWinner = () => {
    for (let a = 0; a < 8; a++) { 
        let b = wincombo[a];
        let cell1 = cells[b[0]].getAttribute("data-player");
        let cell2 = cells[b[1]].getAttribute("data-player");
        let cell3 = cells[b[2]].getAttribute("data-player");

        if (cell1 && cell1 === cell2 && cell1 === cell3) {
            resultBox.style.display = "block";
            preContainer.style.display = "none";
            winnerMsg.innerHTML = `Player ${cell1} won the game!`;
            return;
        }
    }
};

let checkDraw = () => {
    let allFilled = Array.from(cells).every(cell => cell.innerHTML !== "");
    if (allFilled) {
        resultBox.style.display = "block";
        preContainer.style.display = "none";
        winnerMsg.innerHTML = "Match has been drawn!";
    }
};
