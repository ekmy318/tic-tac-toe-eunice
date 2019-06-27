// const store = require('../store')
const

const boardClick = (target, xo) => {
  target.text(xo)
}

const invalidMove = () => {
  $('#gameMessage').text('Square taken!')
}

const winnerMessage = (shape) => {
  $('#gameMessage').text(shape + ' wins!')
}

module.exports = {
  boardClick,
  invalidMove,
  winnerMessage
}
