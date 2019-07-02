'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onStats = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getGames(formData)
    .then(ui.getGamesSucess)
    .catch(ui.getGamesFailure)
}

const onCreateGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const checkWinner = (id1, id2, id3) => {
  const tile1 = $('#' + id1).text()
  const tile2 = $('#' + id2).text()
  const tile3 = $('#' + id3).text()
  if ((tile1 === 'X' && tile2 === 'X' && tile3 === 'X') ||
   (tile1 === 'O' && tile2 === 'O' && tile3 === 'O')) {
    return true
  }
  return false
}

const onUpdateGame = event => {
  event.preventDefault()
  if (!store.over) {
    const tile = $(event.target)
    const id = tile.attr('id')
    if (tile.text() === 'X' || tile.text() === 'O') {
      ui.invalidMove()
    } else {
      $('#message').text('')
      if (store.tokenA === 'X') {
        ui.boardClick(tile, 'X')
        store.tokenA = 'O'
        store.tokenB = 'X'
      } else {
        ui.boardClick(tile, 'O')
        store.tokenA = 'X'
        store.tokenB = 'O'
      }
      $('#message').text(`${store.tokenA}'s turn`)
      api.updateGame(id, store.tokenB)
        .then(ui.moveSuccess(event.target, store.tokenB))
        .catch(ui.moveFailure)
      store.game.cells[id] = store.tokenB
    }
    if (checkWinner(0, 1, 2) || checkWinner(3, 4, 5) || checkWinner(6, 7, 8) ||
        checkWinner(0, 3, 6) || checkWinner(1, 4, 7) || checkWinner(2, 5, 8) ||
        checkWinner(0, 4, 8) || checkWinner(2, 4, 6)) {
      store.over = true
      ui.winnerMessage()
    }
    if (!store.game.cells.every(e => e) === false) {
      store.over = true
      return ui.drawGame()
    }
  } else store.over = true
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onStats
}
