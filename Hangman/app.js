const hintBtn = document.querySelector("#hint-btn");
const againBtn = document.querySelector("#again-btn");

const hintBox = document.querySelector('.hint-box')

const wordSect = document.querySelector('.word-sect')
const livesSpan = document.querySelector('.lives-span')

const words = [
    {
        country: 'australia',
        hint: 'kangaroo'
    },
    {
        country: 'afghanistan',
        hint: 'kabul'
    },
    {
        country: 'germany',
        hint: 'world war II'
    },
    {
        country: 'united kingdom',
        hint: 'big ben'
    },
    {
        country: 'norway',
        hint: 'fjords'
    },
    {
        country: 'ireland',
        hint: 'leprechauns'
    },
    {
        country: 'china',
        hint: 'great wall'
    },
    {
        country: 'japan',
        hint: 'mount fuji'
    },
    {
        country: 'mexico',
        hint: 'tacos'
    },
    {
        country: 'georgia',
        hint: 'wine inventor'
    }
];

const guesses = []
let lives = 6
livesSpan.textContent = lives

const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];




const getRandomCountry = () => {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
};
const randomCountry = getRandomCountry()

const printDashes = () => {
    const countryLetters = randomCountry.country.split('')
    for (let i = 0; i < countryLetters.length; i++) {
        const pTag = document.createElement('p')
        pTag.textContent = '_'
        pTag.className = `${countryLetters[i]}`
        wordSect.appendChild(pTag)
    }
}
printDashes()

const randomCountryArr = randomCountry.country.split('')
console.log(randomCountry)

const checkLetter = () => {

    for (const letter of letters) {
        const letterElement = document.querySelector(`#${letter}`);
        const underScore = document.querySelectorAll(`.${letter}`)

        letterElement.addEventListener('click', () => {
            if (randomCountryArr.includes(letter.toLowerCase())) {
                if (underScore.length === 1) {
                    if (underScore[0].className == letter) {
                        underScore[0].textContent = letter
                        guesses.push(letter)
                    }
                } else {
                    if (underScore[0].className == letter) {
                        underScore.forEach(el => el.textContent = letter)
                        guesses.push(letter)
                    }
                }
            } else {
                lives -= 1
                if (lives === 0) {
                    alert('Mission Failed. Your country was: ' + randomCountry)
                    for (const letter of letters) {
                        const letterElement = document.querySelector(`#${letter}`);
                        letterElement.className = 'disabled'
                    }
                }
                livesSpan.textContent = lives
            }
            const sortedGuess = guesses.sort().join('')
            const matchingGuess = words.find(el => el.country.split('').sort().join('') === sortedGuess)
            if (matchingGuess) {
                for (const letter of letters) {
                    const letterElement = document.querySelector(`#${letter}`);
                    letterElement.className = 'disabled'
                }
                alert("You Won!")

            }
        });
    }

}

checkLetter()

againBtn.addEventListener('click', () => {
    location.reload()
})

hintBtn.addEventListener('click', () => {
    const hintText = document.querySelector('.hint-box-text')
    hintText.textContent = randomCountry.hint
})

