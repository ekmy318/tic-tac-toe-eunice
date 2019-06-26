// const store = require('../store')

const boardClick = (target, xOrO) => {
  target.text(xOrO)
}

const invalidMove = () => {
  $('#gameMessage').text('Square taken!')
}

module.exports = {
  boardClick,
  invalidMove
}
