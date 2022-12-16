const inputField = document.querySelector('#inputField');
const word = document.querySelector('.word');
const hint = document.querySelector('.hint span');
const time = document.querySelector('.time b');
const refreshBtn = document.querySelector('.refresh');
const checkBtn = document.querySelector('.check');

let timer, correctWord;
let TIME = 60;

const initGame = () => {
    time.innerText = TIME;

    // start timer
    initTimer(TIME);

    // get random word
    let randomWord = getRandomWord();
    correctWord = randomWord.word;

    // split the random word into an array of its letters
    let wordArray = randomWord.word.split('');

    //randomize wordArray
    randomize(wordArray);

    // display random word
    word.innerHTML = wordArray.join('');

    // display hint
    hint.innerHTML = randomWord.hint;

    // clear input field
    inputField.value = '';
    inputField.setAttribute('maxlength', correctWord.length);
}

const getRandomWord = () => {
    // get random word from words array
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

const randomize = (array) => {
    for (let currentIdx = array.length - 1; currentIdx > 0; --currentIdx) {
        const randomIdx = Math.floor(Math.random() * (currentIdx + 1));

        // swap current element with random element
        [array[currentIdx], array[randomIdx]] = [array[randomIdx], array[currentIdx]];

        // another way to do it ↓
        // let temp = array[currentIdx];
        // array[currentIdx] = array[randomIdx];
        // array[randomIdx] = temp;
    }
}

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return time.innerText = maxTime;
        }
        showAlert('time', correctWord);
        initGame();
    }, 1000);
}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();

    if(!userWord) return showAlert('warning');

    if(userWord !== correctWord) return showAlert('error', userWord);

    showAlert('success', userWord);
    initGame();
}

initGame();

refreshBtn.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);