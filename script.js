let gamePoint = 0;
let score1 = 0;
let score2 = 0;

const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const winnerScreen = document.getElementById("winnerScreen");

const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const winnerText = document.getElementById("winnerText");

document.getElementById("startGameBtn").addEventListener("click", () => {
  const input = document.getElementById("gamePointInput").value;

  if (!input || input <= 0) {
    alert("Enter valid game point");
    return;
  }

  gamePoint = Number(input);
  score1 = 0;
  score2 = 0;

  score1El.textContent = 0;
  score2El.textContent = 0;

  setupScreen.classList.remove("active");
  gameScreen.classList.add("active");
});

function changeScore(team, value) {
  if (winnerScreen.classList.contains("active")) return;

  if (team === 1) {
    score1 += value;
    if (score1 < 0) score1 = 0;
    if (score1 > gamePoint) score1 = gamePoint;
    score1El.textContent = score1;

    if (score1 === gamePoint) {
      showWinner("TEAM 1 WINS 🎉");
    }
  } else {
    score2 += value;
    if (score2 < 0) score2 = 0;
    if (score2 > gamePoint) score2 = gamePoint;
    score2El.textContent = score2;

    if (score2 === gamePoint) {
      showWinner("TEAM 2 WINS 🎉");
    }
  }
}

function showWinner(text) {
  gameScreen.classList.remove("active");
  winnerText.textContent = text;
  winnerScreen.classList.add("active");
}

function resetGame() {
  winnerScreen.classList.remove("active");
  setupScreen.classList.add("active");
}
