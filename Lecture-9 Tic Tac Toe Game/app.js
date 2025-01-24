let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");


let turnO = true; // playerX, playerY

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// Fixing the typo and making the loop functional
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){ //playerO
            box.innerText = "O";
            turnO = false;
        } else { //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const enableBoxes = () => {
    for( let box of boxes) {
        box.disabled = false;
    }
};

const showWinner = (winner) => {
    msg.innerText = "Congratulations,Winner is ${winner}";
    msgContainer.classList.remove("hide");
};

const checkWiner = () => {
    let post1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(postVal != && pos2Val != "" pos2Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner");
            showWinner();

        }
       
    }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

