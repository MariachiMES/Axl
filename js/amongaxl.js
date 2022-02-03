const word = document.querySelector("#word");
const nextBtn = document.querySelector("#next");
let wordList = [];
wordList.push(localStorage.getItem("wordList"));
let usedWords = [];

if (wordList.length < 2) {
  wordList = wordList[0].split(",");
}
console.log(wordList);
function randomWord() {
  random = Math.floor(Math.random() * wordList.length);
  nextWord = wordList[random];
  word.innerHTML = nextWord;
  if (usedWords.includes(nextWord)) {
    console.log("word is in usedwords" + usedWords);
    randomWord();
  }

  if (prevWord == nextWord) {
    console.log("its the same");
    randomWord();
  } else {
    console.log("it's different");
    word.innerHTML = nextWord;
    usedWords.push(word.innerHTML);
    console.log(usedWords);
  }
}
randomWord();
nextBtn.addEventListener("click", randomWord);

console.log(random);
