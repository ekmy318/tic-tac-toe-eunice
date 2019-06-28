'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onCreateGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const checkWinner = (id1, id2, id3) => {
  const tile1 = $('#' + id1)
  const tile2 = $('#' + id2)
  const tile3 = $('#' + id3)
  if ((tile1.text() === 'X' && tile2.text() === 'X' && tile3.text() === 'X') ||
   (tile1.text() === 'O' && tile2.text() === 'O' && tile3.text() === 'O')) {
    return true
  }
  return false
}

const onUpdateGame = event => {
  event.preventDefault()
  if (!store['over']) {
    const tile = $(event.target)
    const id = tile.attr('id')
    if (tile.text() === 'X' || tile.text() === 'O') {
      ui.invalidMove()
    } else {
      $('#mesage').text('')
      if (store['currentPlayer'] === 'X') {
        ui.boardClick(tile, 'X')
        store['currentPlayer'] = 'O'
        store['previousPlayer'] = 'X'
      } else {
        ui.boardClick(tile, 'O')
        store['currentPlayer'] = 'X'
        store['previousPlayer'] = 'O'
      }
      $('#message').text(store['currentPlayer'] + "'s turn")
      api.updateGame(id, store['previousPlayer'])
    }
    if (checkWinner(0, 1, 2) || checkWinner(3, 4, 5) || checkWinner(6, 7, 8) ||
        checkWinner(0, 3, 6) || checkWinner(1, 4, 7) || checkWinner(2, 5, 8) ||
        checkWinner(0, 4, 8) || checkWinner(2, 4, 6)) {
      store['over'] = true
      ui.winnerMessage()
    }
  }
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
