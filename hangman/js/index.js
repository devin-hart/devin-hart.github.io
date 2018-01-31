const form = document.forms[0];
const restartBtn = document.querySelector('#reset');
const hideDivs = document.querySelector('.hidedivs');
let words = [
  "vorhees",
  "pamela",
  "crystal",
  "lazarus",
  "machete",
  "drowned",
  "forestgreen",
  "jarvis",
  "decapitation",
  "newblood"
];
let hints = [
  "Jason's last name",
  "Jason's mother's name",
  "Camp _______ Lake 🔪",
  "USS _______, name of the ship in Part VIII",
  "Jason's weapon of choice",
  "How Jason originally died",
  "Name of the town in Part VI 🔪",
  "Reccuring character in the series Tommy ______",
  "How Mrs. Vorhees meets her end 🔪",
  "Title of Part VII 🔪"
];
let x = Math.floor(Math.random() * words.length);
let answer = words[x];
let hint = hints[x];
let state = toUnderscores(answer);
let triesCounter = 0;

restartBtn.addEventListener("click", function() {
  window.location.reload(true);
});


function toUnderscores(str) {
  return str.split("").fill("_");
}


function guessLetter() {
  form.addEventListener("submit", function(event) {
    event.preventDefault();


    let guess = form.guess.value;

    for (let i = 0; i < state.length; i++) {

      if (answer[i] === guess) {
        state[i] = answer[i];
        correct.textContent = state.join("");
      }
    }

    if (answer !== guess) {
      triesCounter++;
      attempts.textContent = triesCounter;
      lastletter.textContent = guess;
    }



    if (state.join("") === answer) {
      restartBtn.classList.remove('hidden');
      winlose.innerHTML = '<img src="images/hangman_win.gif" width="366px" height="400px">';
      document.querySelector('#submitbtn').disabled = true;
      hideDivs.classList.add('hidden');

    }

    if (triesCounter > 9) {
      restartBtn.classList.remove('hidden');
      winlose.innerHTML = '<img src="images/hangman_lose.gif">';
      document.querySelector('#submitbtn').disabled = true;
      hideDivs.classList.add('hidden');
    }


    form.guess.value = '';
  });
}
correct.textContent = state.join("");

hintDiv.textContent = hints[x];


guessLetter();
