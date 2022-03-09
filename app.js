const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]


cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.append(card)
    }
}


function flipCard() {
    let cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    // console.log('clicked', cardID)
    // console.log(cardsChosen)
    // console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardID].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    // Check for matching cards
    const card = document.querySelectorAll('#grid img')
    const id1 = cardsChosenIds[0]
    const id2 = cardsChosenIds[1]
    console.log('check for match')
    if (id1 === id2) {
        card[id1].setAttribute('src', 'images/blank.png')
        card[id2].setAttribute('src', 'images/blank.png')
        alert('Same image!')
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        card[id1].setAttribute('src', 'images/white.png')
        card[id2].setAttribute('src', 'images/white.png')
        card[id1].removeEventListener('click', flipCard)
        card[id2].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        card[id1].setAttribute('src', 'images/blank.png')
        card[id2].setAttribute('src', 'images/blank.png')

    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congrats! You found them all'
    }

}

createBoard()


