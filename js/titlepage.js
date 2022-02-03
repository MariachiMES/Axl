const playBtn = document.querySelector("#play-game");

const gameData = localStorage.getItem("wordList");

if (!gameData) {
  playBtn.classList.add("is-hidden");
}
