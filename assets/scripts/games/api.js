'use strict'

const config = require('./../config')
const store = require('../store')

const createGame = gameData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: gameData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (index, value) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: store.over
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

//
// const showGame = function (id) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + id,
//     method: 'GET'
//   })
// }

module.exports = {
  createGame,
  updateGame,
  getGames
  // showGame,
}
