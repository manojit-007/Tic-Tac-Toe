let btns = document.querySelectorAll(".btn");
const resetBtn = document.getElementById("resetBtn");
let playerX = document.getElementById("playerX");
let playerO = document.getElementById("playerO");
let turnO = false;
let turnX = false;

let messageBox = document.querySelector(".messageBox");
let statusBox = document.querySelector(".status");

const winningCases = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [0, 4, 8], [2, 4, 6], [1, 4, 7], [2, 5, 8]
];

const checkWinner = () => {
    for (let winCase of winningCases) {
        let pos1Val = btns[winCase[0]].innerText;
        let pos2Val = btns[winCase[1]].innerText;
        let pos3Val = btns[winCase[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            statusBox.innerHTML = `Player ${pos1Val} Win `
            return true;
        }
    }
    return false;
};



resetBtn.addEventListener("click", () => {
    playerO.disabled = false
    playerX.disabled = false
    statusBox.innerHTML = "Choose Sign"
    btns.forEach((btn) => {
        btn.innerHTML = ""
        btn.disabled = false;
    })
    turnO = false
    turnX = false;
})
playerX.addEventListener("click", () => {
    playerO.disabled = true
    playerX.disabled = true
    turnO = false
    turnX = true
    statusBox.innerHTML = "Player X turn"
})
playerO.addEventListener("click", () => {
    playerO.disabled = true
    playerX.disabled = true
    turnO = true
    turnX = false
    statusBox.innerHTML = "Player O turn"
})


function userInput() {
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (turnO === true || turnX === true) {
                if (turnO === true) {
                    btn.innerHTML = "O";
                    turnO = false;
                    turnX = true;
                } else {
                    btn.innerHTML = "X";
                    turnX = false;
                    turnO = true;
                }
                btn.disabled = true;
                if (checkWinner()) {
                    btns.forEach((btn) => {
                        btn.disabled = true;
                    });
                }
            } else {
                alert("choose player")
            }
        })
    })

}

userInput()