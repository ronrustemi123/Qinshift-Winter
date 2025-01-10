const letterA = document.querySelector("#a");
const letterB = document.querySelector("#b");
const letterC = document.querySelector("#c");
const letterD = document.querySelector("#d");
const letterE = document.querySelector("#e");
const letterF = document.querySelector("#f");
const letterG = document.querySelector("#g");
const letterH = document.querySelector("#h");
const letterI = document.querySelector("#i");
const letterJ = document.querySelector("#j");
const letterK = document.querySelector("#k");
const letterL = document.querySelector("#l");
const letterM = document.querySelector("#m");
const letterN = document.querySelector("#n");
const letterO = document.querySelector("#o");
const letterP = document.querySelector("#p");
const letterQ = document.querySelector("#q");
const letterR = document.querySelector("#r");
const letterS = document.querySelector("#s");
const letterT = document.querySelector("#t");
const letterU = document.querySelector("#u");
const letterV = document.querySelector("#v");
const letterW = document.querySelector("#w");
const letterX = document.querySelector("#x");
const letterY = document.querySelector("#y");
const letterZ = document.querySelector("#z");

const hintBtn = document.querySelector("#hint-btn");
const againBtn = document.querySelector("#again-btn");

const wordSect = document.querySelector('.word-sect')
const livesSpan = document.querySelector('.lives-span')

const words = ['australia', 'afganistan', 'germany', 'united kingdom', 'norway', 'ireland', 'china', 'japan', 'mexico', 'azerbaijan']
let lives = 6
const guesses = []
const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];




const getRandomCountry = () => {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
};
const randomCountry = getRandomCountry()
let randomCountryIndexes = []
for (let i = 0; i < randomCountry.length; i++) {
    randomCountryIndexes.push(i)
}

const printDashes = () => {
    const countryLetters = randomCountry.split('')
    for (let i = 0; i < countryLetters.length; i++) {
        const pTag = document.createElement('p')
        pTag.textContent = '_'
        pTag.className = `${countryLetters[i]}`
        wordSect.appendChild(pTag)
    }
}
printDashes()

const randomCountryArr = randomCountry.split('')
console.log(randomCountry)
for (const letter of letters) {
    const letterElement = document.querySelector(`#${letter}`);

    letterElement.addEventListener('click', () => {
        if (randomCountryArr.includes(letter.toLowerCase())) {
            const underScore = document.querySelectorAll(`.${letter}`)
            if (underScore.length === 1) {
                if (underScore[0].className == letter) {
                    underScore[0].textContent = letter
                }
            } else {
                if (underScore[0].className == letter) {
                    underScore.forEach(el => el.textContent = letter)
                }
            }
        } else {
            lives -= 1
        }
    });
}

