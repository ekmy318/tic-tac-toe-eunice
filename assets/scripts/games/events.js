'use strict'

// const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGameboard = events => {
  const target = $(events.target)
  if (target.text() === 'O' || target.text() === 'X') {
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
}

module.exports = {
  onGameboard
}
