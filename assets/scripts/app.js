'use strict'

const userEvents = require('./user/events')
const gameEvents = require('./games/events')
// const exampleEvents = require('./examples/events')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('.square').on('click', gameEvents.onGameboard)
  // $('#guest-plaer').on('click'), )
  // $('#create-example').on('submit', exampleEvents.onCreateExample)
})
