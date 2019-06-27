'use strict'

// const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGameboard = events => {
  const target = $(events.target)
  if (target.text() === 'X' || target.text() === 'O') {
    ui.invalidMove()
  } else {
    $('#gameMessage').text('')
    if (store['currentPlayer'] === 'X') {
      ui.boardClick(target, 'X')
      store['currentPlayer'] = 'O'
    } else {
      ui.boardClick(target, 'O')
      store['currentPlayer'] = 'X'
    }
  }
  onCheckWinner()
}

const onCheckWinner = () => {
  if (($('#0') && $('#1') && $('#2') === 'currentPlayer') ||
      ($('#3') && $('#4') && $('#5') === 'currentPlayer') ||
      ($('#6') && $('#7') && $('#8') === 'currentPlayer') ||
      ($('#0') && $('#3') && $('#6') === 'currentPlayer') ||
      ($('#1') && $('#4') && $('#7') === 'currentPlayer') ||
      ($('#2') && $('#5') && $('#8') === 'currentPlayer')) {
    return ui.winnerMessage('currentPlayer')
  }
}

module.exports = {
  onGameboard,
  onCheckWinner
}
