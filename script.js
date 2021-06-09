const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.getElementById('player--0')
const player1El = document.getElementById('player--1')
const diceEl = document.getElementById('dice')
const spanEl = document.getElementById('span')

const btnRoll = document.getElementById('roll')
const btnNew = document.getElementById('new')
const btnHold = document.getElementById('hold')

const goal = 20
const scores = [0, 0]

let currentScore = 0
let activePlayer = 0
let playerScore = document.getElementById(`current--${activePlayer}`)


const togglePlayers = function () {
    if (scores[activePlayer] >= goal) return win()

    playerScore.textContent = 0
    currentScore = 0
    activePlayer = activePlayer ? 0 : 1
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

const addCurrentScoreToTotal = () => {
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

}

const win = function () {
    const player = document.getElementById(`player--${activePlayer}`)

    btnRoll.removeEventListener('click', rollDice);
    btnHold.removeEventListener('click', holdDice);
    player.classList.add('player--winner')
    player.classList.remove('player--active')
    diceEl.classList.add('hidden')
}


const rollDice = function () {
    const player = document.getElementById(`current--${activePlayer}`)
    const roll = Math.ceil(Math.random() * 6)

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${roll}.png`

    if (roll !== 1) return currentScore += roll, player.textContent = currentScore
    return togglePlayers()

}

const holdDice = () => { return addCurrentScoreToTotal(), togglePlayers() }
const resetGame = () => location.reload()


btnRoll.addEventListener('click', rollDice)
btnNew.addEventListener('click', resetGame)
btnHold.addEventListener('click', holdDice)

spanEl.textContent = goal





