const quotes = [
    'Things are only impossible until they are not',
    'It is possible to commit no errors and still lose. That is not a weakness. That is life',
    'There is a way out of every box, a solution to every puzzle; it is just a matter of finding it.',
    'Without freedom of choice there is no creativity',
    'Logic is the beginning of wisdom, not the end',
    'Improve a mechanical device and you may double productivity. But improve yourself, you gain a thousandfold',
    'Compassion: that is the one thing no machine ever had. Maybe it is the one thing that keeps us ahead of them.',
];

const quote = document.getElementById("quote");
const input = document.getElementById("typed-value");
const start = document.getElementById("start");
const message = document.getElementById("message");


let wordQueue;
let quoteText;
let highlightPosition;
let startTime;

function startGame() {
    console.log("Game Started!");

    const quoteIndex = Math.floor(Math.random() * quotes - length);
    // will return a random number from 1 to 7

    quoteText = quotes[quoteIndex];
    wordQueue = quoteText.split(" ");

    quote.innerHTML = wordQueue.map((word) => `<span>${word}</span>`).join("");

    highlightPosition = 0;
    quote.childNodes[highlightPosition].className = "highlight";

    startTime = new Date().getTime();

}

function checkInput() {
    // wordQueue[0] allows us to grab the first element in our wordQueue array using an array indexer
    const currentWord = wordQueue[0].].replaceAll(".", "").replaceAll(",", "");
    const typedValue = input.value.trim();

    if (currentWord !== typedValue) {
        input.className = currentWord.startsWith(typedValue) ? "" : "error";
        return;
    }

    wordQueue.shift();
    input.value = "";

    quote.childNodes[highlightPosition].className = "";
    highlightPosition++;
    quote.childNodes[highlightPosition].className = "highlight";
}

function gameOver() {
    const elapsedTime = new Date().getTime - startTime;

    message.innerHTML = `<span class="congrats">Congratulations!</span><br>

    `;
}

// element.addEventListener(event, function);
input.addEventListener("input", checkInput);
start.addEventListener("click", startGame);