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

const printDashes = () => {
    const countryLetters = randomCountry.country.split('')
    for (let i = 0; i < countryLetters.length; i++) {
        const pTag = document.createElement('p')
        if (countryLetters[i] === ' ') {
            pTag.textContent = '-'
        } else {
            pTag.textContent = '_'
        }
        pTag.className = `${countryLetters[i]}`
        wordSect.appendChild(pTag)
    }
}

const checkLetter = () => {

    for (const letter of letters) {
        const letterElement = document.querySelector(`#${letter}`);
        const underScore = document.querySelectorAll(`.${letter}`)

        letterElement.addEventListener('click', () => {
            letterElement.classList.add('clicked')
            letterElement.classList.add('disabled')
            if (randomCountryArr.includes(letter.toLowerCase())) {
                if (underScore.length === 1) {
                    if (underScore[0].className == letter) {
                        underScore[0].textContent = letter
                        guesses.push(letter)
                    }
                } else {
                    if (underScore[0].className == letter) {
                        underScore.forEach(el => el.textContent = letter)
                        underScore.forEach(() => guesses.push(letter))

                    }
                }
            } else {
                lives -= 1
                if (lives === 0) {
                    alert('Mission Failed. Your country was: ' + randomCountry.country)
                    for (const letter of letters) {
                        const letterElement = document.querySelector(`#${letter}`);
                        letterElement.classList.add('disabled')
                    }
                }
                livesSpan.textContent = lives
            }
            const sortedGuess = guesses.sort().join('')
            const matchingGuess = words.find(el => el.country.split('').sort().join('') === sortedGuess)
            if (guesses.length !== 0 && matchingGuess) {
                for (const letter of letters) {
                    const letterElement = document.querySelector(`#${letter}`);
                    letterElement.classList.add('disabled')
                }
                alert("You Won!")

            }
        });
    }
}


againBtn.addEventListener('click', () => {
    location.reload()
})

hintBtn.addEventListener('click', () => {
    const hintText = document.querySelector('.hint-box-text')
    hintText.textContent = randomCountry.hint
})

const randomCountry = getRandomCountry()
const randomCountryArr = randomCountry.country.split('')
printDashes()
checkLetter()



