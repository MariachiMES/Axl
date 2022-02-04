const addWordBtn = document.querySelector("#add-word");
const wordInput = document.querySelector("#new-word");
const playGameBtn = document.querySelector("#play-game");
let wordList = [];
wordList.push(localStorage.getItem("wordList"));

if (wordList[0] !== null) {
  console.log("not gonna split");
  wordList = wordList[0].split(",");
} else {
  console.log(wordList);
}
console.log(wordList);

function displayButton() {
  if (wordList[0] == null) {
    playGameBtn.classList.add("is-hidden");
    console.log("nothing here");
  } else {
    playGameBtn.classList.remove("is-hidden");
  }
}

displayButton();

addWordBtn.addEventListener("click", () => {
  console.log(wordInput.value);
  if (!wordInput.value) {
    alert("you must enter a valid word");
  } else {
    if (wordList[0] == null) {
      wordList.shift();
    }
    if (wordList.includes(wordInput.value.toUpperCase())) {
      alert("word is already in there");
    } else {
      wordList.push(wordInput.value.toUpperCase().toString());
      localStorage.setItem("wordList", wordList);
      console.log(wordList);
      wordInput.value = "";
      displayButton();
    }
  }
});
