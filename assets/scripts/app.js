'use strict'

const userEvents = require('./user/events')
const gameEvents = require('./games/events')
// const exampleEvents = require('./examples/events')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#guest-player').on('click', userEvents.onGuest)
  $('#new-game').on('click', gameEvents.onCreateGame)
  $('.square').on('click', gameEvents.onUpdateGame)
  $('#stats').on('click', gameEvents.onStats)
})
