'use strict'

const config = require('./../config')

const indexGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data
  })
}

const showGame = function (id) {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'GET'
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/' + data.games.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  indexGames,
  createGame,
  showGame,
  updateGame
}
