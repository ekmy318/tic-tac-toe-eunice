const store = require('../store')

const createGameSuccess = gameData => {
  store.game = gameData.game
  store.over = false
  console.log('now store is: ', store)
  $('#new-game').removeClass('hide')
  $('#gameboard').removeClass('hide')
  $('.square').text('')
  $('#message').text('')
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

const winnerMessage = () => {
  $('#message').text(`${store['previousPlayer']} wins! Click New Game to play again!`)
}
// const updateSuccess = responseData => {
//   store.game = responseData.game
//   store.user.token = responseData.user
//   console.log('store is: ', store)
// }

module.exports = {
  createGameSuccess,
  createGameFailure,
  boardClick,
  invalidMove,
  winnerMessage
}
