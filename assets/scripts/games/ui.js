const store = require('../store')

const createGameSuccess = gameData => {
  store.game = gameData.game
  store.over = false
  store.tokenA = 'X'
  $('#new-game').removeClass('hide')
  $('#gameboard').removeClass('hide')
  $('.square').text('')
  $('#message').text('')
  $('#stats').removeClass('hide')
  if (store.user.email === 'guest@guest') {
    $('#stats').addClass('hide')
  }
}

const drawGame = () => {
  $('#message').text('Draw! Try again!')
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
  $('#message').text(`${store.tokenB} wins! Click New Game to play again!`)
}

const getGamesSucess = (responseData) => {
  const num = responseData.games
  $('#message').text(`You've played ${num.length} games.`)
}

const getGamesFailure = () => {
  $('#message').text('Failed to get data')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  boardClick,
  invalidMove,
  moveFailure,
  winnerMessage,
  drawGame,
  moveSuccess,
  getGamesSucess,
  getGamesFailure
}
