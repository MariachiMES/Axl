const word = document.querySelector("#word");
const nextBtn = document.querySelector("#next");
let wordList = [];
wordList.push(localStorage.getItem("wordList"));
let usedWords = [];

if (wordList.length < 2) {
  wordList = wordList[0].split(",");
}

function setInitialWord() {
  random = Math.floor(Math.random() * wordList.length);
  nextWord = wordList[random];
  word.innerHTML = nextWord;
}

setInitialWord();

let prevArray = [];
let wordsRemaining = wordList;

function randomWord() {
  if (wordsRemaining.length === 0) {
    alert("you fuggin win!");
    return;
  }
  random = Math.floor(Math.random() * wordsRemaining.length);
  nextWord = wordsRemaining[random];
  if (prevArray.includes(nextWord)) {
    randomWord();
  }
  wordsRemaining.splice(random, 1);
  prevArray.push(nextWord);
  word.innerHTML = nextWord;
  return prevArray;
}

function prevWord() {
  console.log(prevArray);
}

nextBtn.addEventListener("click", randomWord);
