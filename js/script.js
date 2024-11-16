let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Move Counter
let player1 = 0;
let player2 = 0;

// Adding the click event to the boxes
for (let i = 0; i < boxes.length; i++) {

    //When Someone Clicks the Box
    boxes[i].addEventListener("click", function () {

        let element = checkTheElement(player1, player2);

        // Checks if an "X" or "O" has already been filled in the field
        if (this.childNodes.length == 0) {

            let cloneElement = element.cloneNode(true);
            this.appendChild(cloneElement);

            // To compute the play
            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'ai-player') {
                    iaPlay();
                    player2++
                }

            } else {
                player2++;
            }
            checkWinCondition();
        }
    });
}

// Event to find out if it is 2 players or against the AI
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        setTimeout(function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    });
}


// FUNCTIONS
function iaPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        // Will only be filled if 'filled' is empty. The child must be empty for filling
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
            // Checking how many boxes are already filled
        } else {
            filled++;
        }
    }
    if (counter == 0 && filled < 9) {
        iaPlay();
    }
}

// Check who will play
function checkTheElement(player1, player2) {
    if (player1 == player2) {
        // x
        element = x;
    } else {
        // o
        element = o
    }
    return element;
}

// Check which player won the match
function checkWinCondition() {
    let block1 = document.getElementById("block-1");
    let block2 = document.getElementById("block-2");
    let block3 = document.getElementById("block-3");
    let block4 = document.getElementById("block-4");
    let block5 = document.getElementById("block-5");
    let block6 = document.getElementById("block-6");
    let block7 = document.getElementById("block-7");
    let block8 = document.getElementById("block-8");
    let block9 = document.getElementById("block-9");

    // Horizontal
    if (block1.childNodes.length > 0 && block2.childNodes.length > 0 && block3.childNodes.length > 0) {
        let block1Child = block1.childNodes[0].className;
        let block2Child = block2.childNodes[0].className;
        let block3Child = block3.childNodes[0].className;

        if (block1Child == 'x' && block2Child == 'x' && block3Child == 'x') {
            // x
            declareWinner('x');
        } else if (block1Child == 'o' && block2Child == 'o' && block3Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if (block4.childNodes.length > 0 && block5.childNodes.length > 0 && block6.childNodes.length > 0) {
        let block4Child = block4.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block6Child = block6.childNodes[0].className;

        if (block4Child == 'x' && block5Child == 'x' && block6Child == 'x') {
            // x
            declareWinner('x');
        } else if (block4Child == 'o' && block5Child == 'o' && block6Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if (block7.childNodes.length > 0 && block8.childNodes.length > 0 && block9.childNodes.length > 0) {
        let block7Child = block7.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block7Child == 'x' && block8Child == 'x' && block9Child == 'x') {
            // x
            declareWinner('x');
        } else if (block7Child == 'o' && block8Child == 'o' && block9Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    // Vertical
    if (block1.childNodes.length > 0 && block4.childNodes.length > 0 && block7.childNodes.length > 0) {
        let block1Child = block1.childNodes[0].className;
        let block4Child = block4.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

        if (block1Child == 'x' && block4Child == 'x' && block7Child == 'x') {
            // x
            declareWinner('x');
        } else if (block1Child == 'o' && block4Child == 'o' && block7Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if (block2.childNodes.length > 0 && block5.childNodes.length > 0 && block8.childNodes.length > 0) {
        let block2Child = block2.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;

        if (block2Child == 'x' && block5Child == 'x' && block8Child == 'x') {
            // x
            declareWinner('x');
        } else if (block2Child == 'o' && block5Child == 'o' && block8Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if (block3.childNodes.length > 0 && block6.childNodes.length > 0 && block9.childNodes.length > 0) {
        let block3Child = block3.childNodes[0].className;
        let block6Child = block6.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block3Child == 'x' && block6Child == 'x' && block9Child == 'x') {
            // x
            declareWinner('x');
        } else if (block3Child == 'o' && block6Child == 'o' && block9Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    // Diagonal
    if (block1.childNodes.length > 0 && block5.childNodes.length > 0 && block9.childNodes.length > 0) {
        let block1Child = block1.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block1Child == 'x' && block5Child == 'x' && block9Child == 'x') {
            // x
            declareWinner('x');
        } else if (block1Child == 'o' && block5Child == 'o' && block9Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if (block3.childNodes.length > 0 && block5.childNodes.length > 0 && block7.childNodes.length > 0) {
        let block3Child = block3.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

        if (block3Child == 'x' && block5Child == 'x' && block7Child == 'x') {
            // x
            declareWinner('x');
        } else if (block3Child == 'o' && block5Child == 'o' && block7Child == 'o') {
            // o
            declareWinner('o');
        }
    }

    // Draw (Deu velha)
    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }
    if (counter == 9) {
        declareWinner('Deu velha!');
    }
}

// Clears the game, declares a winner and updates the scoreboard
function declareWinner(winner) {
    let scoreboardX = document.getElementById('scoreboard-1');
    let scoreboardO = document.getElementById('scoreboard-2');
    let message = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        message = "Player 1 won!";
    } else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        message = "Player 2 won!";
    } else {
        message = "Deu velha!!"
    }

    // Message display on screen
    messageText.innerHTML = message;
    messageContainer.classList.remove("hide");

    // Hide the message
    setTimeout(function () {
        messageContainer.classList.add("hide");
    }, 3000)

    // Reset the plays
    player1 = 0;
    player2 = 0;

    // Clear moves from the previous match
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}