const store = require('../store')

const createGameSuccess = gameData => {
  store.game = gameData.game
  store.over = false
  store.currentPlayer = 'X'

  console.log('store after creategame is: ', store)
  $('#new-game').removeClass('hide')
  $('#gameboard').removeClass('hide')
  $('.square').text('')
  $('#message').text('')
}

const drawGame = () => {
  $('#message').text('Draw! Play Click New Game to play again!')
}

const createGameFailure = () => {
  $('#message').text('Failed to create new game!')
}

const boardClick = (target, xo) => {
  target.text(xo)
}

const invalidMove = () => {
  $('#message').text('Square taken!')
}

const moveSuccess = (currentTile, sign) => {
  $(currentTile).text(sign)
}

const moveFailure = responseData => {
  $('#message').text("Can't make this move")
}

const winnerMessage = () => {
  $('#message').text(`${store['previousPlayer']} wins! Click New Game to play again!`)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  boardClick,
  invalidMove,
  moveFailure,
  winnerMessage,
  drawGame,
  moveSuccess
}
