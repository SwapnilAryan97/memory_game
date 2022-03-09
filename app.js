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
const cardChosen = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.append(card)
    }
}

createBoard()

function flipCard() {
    let cardID = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardID].name)
    // console.log('clicked', cardID)
    // console.log(cardChosen)
    this.setAttribute('src', cardArray[cardID].img)

    if (cardChosen.length ===2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch(){
    console.log('check for match')
    if (cardChosen[0] === cardChosen[1]) {
        alert('You found a match!')
    }
}

