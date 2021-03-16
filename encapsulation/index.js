const Player = require('./encap')

const player1 = new Player('Tanyo', 21)
const player2 = new Player('Ivan', 20)

player1.win() // score++
player1.win()
player1.win()
player1.win()
player2.win()
player1.loose() // score--
player1.loose()

console.log(player1.getPoints()) // 2
console.log(player2.getPoints()) // 1
