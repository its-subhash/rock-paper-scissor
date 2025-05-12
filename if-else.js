"use strict";
const UserRock = document.getElementById("btn-rock");
const UserPaper = document.getElementById("btn-paper");
const UserScissor = document.getElementById("btn-scissor");
const userScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const message = document.getElementById("message-line");
const rounds = document.getElementById("rounds");
const reset = document.getElementById("btn-reset");
const moves = ["Rock", "Paper", "Scissor"];
let computerMove;
let userMove;
let userFinalScore = 0;
let computerFinalScore = 0;
let gamerounds = 0;
const getComputerVal = () => {
    computerMove = moves[Math.round(Math.random() * 2)];
};
const compareMoveRock = () => {
    gamerounds++;
    rounds === null || rounds === void 0 ? void 0 : rounds.innerText = gamerounds;
    if (computerMove === "Rock") {
        message === null || message === void 0 ? void 0 : message.innerText = "Its a Tie...";
    }
    else if (computerMove === "Paper") {
        computerFinalScore++;
        message === null || message === void 0 ? void 0 : message.innerText = "Computer Chose Paper...hence computer wins";
    }
    else if (computerMove === "Scissor") {
        userFinalScore++;
        message === null || message === void 0 ? void 0 : message.innerText = "Computer Chose Scissor...hence you win.";
    }
    computerScore === null || computerScore === void 0 ? void 0 : computerScore.innerText = `${computerFinalScore}`;
    userScore === null || userScore === void 0 ? void 0 : userScore.innerText = `${userFinalScore}`;
    console.log(typeof computerFinalScore, computerFinalScore);
    console.log(typeof userFinalScore, userFinalScore);
};
const compareMovePaper = () => {
    gamerounds++;
    rounds === null || rounds === void 0 ? void 0 : rounds.innerText = gamerounds;
    if (computerMove === "Paper") {
        message === null || message === void 0 ? void 0 : message.innerText = "Its a Tie...";
    }
    else if (computerMove === "Scissor") {
        computerFinalScore++;
        message === null || message === void 0 ? void 0 : message.innerText = "Computer Chose Scissor...hence computer wins";
    }
    else if (computerMove === "Rock") {
        userFinalScore++;
        message === null || message === void 0 ? void 0 : message.innerText = "Computer Chose Rock...hence you win.";
    }
    computerScore === null || computerScore === void 0 ? void 0 : computerScore.innerText = `${computerFinalScore}`;
    userScore === null || userScore === void 0 ? void 0 : userScore.innerText = `${userFinalScore}`;
};
const compareMoveScissor = () => {
    gamerounds++;
    rounds === null || rounds === void 0 ? void 0 : rounds.innerText = gamerounds;
    if (computerMove === "Scissor") {
        message === null || message === void 0 ? void 0 : message.innerText = "Its a Tie...";
    }
    else if (computerMove === "Rock") {
        computerFinalScore++;
        message === null || message === void 0 ? void 0 : message.innerText = "Computer Chose Rock...hence computer wins";
    }
    else if (computerMove === "Paper") {
        userFinalScore++;
        message === null || message === void 0 ? void 0 : message.innerText = "Computer Chose Paper...hence you win.";
    }
    computerScore === null || computerScore === void 0 ? void 0 : computerScore.innerText = `${computerFinalScore}`;
    userScore === null || userScore === void 0 ? void 0 : userScore.innerText = `${userFinalScore}`;
};
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", () => {
    userFinalScore = 0;
    computerFinalScore = 0;
    gamerounds = 0;
    computerScore === null || computerScore === void 0 ? void 0 : computerScore.innerText = `${computerFinalScore}`;
    userScore === null || userScore === void 0 ? void 0 : userScore.innerText = `${userFinalScore}`;
    rounds === null || rounds === void 0 ? void 0 : rounds.innerText = gamerounds;
});
UserRock === null || UserRock === void 0 ? void 0 : UserRock.addEventListener("click", getComputerVal);
UserPaper === null || UserPaper === void 0 ? void 0 : UserPaper.addEventListener("click", getComputerVal);
UserScissor === null || UserScissor === void 0 ? void 0 : UserScissor.addEventListener("click", getComputerVal);
UserRock === null || UserRock === void 0 ? void 0 : UserRock.addEventListener('click', compareMoveRock);
UserPaper === null || UserPaper === void 0 ? void 0 : UserPaper.addEventListener("click", compareMovePaper);
UserScissor === null || UserScissor === void 0 ? void 0 : UserScissor.addEventListener("click", compareMoveScissor);
