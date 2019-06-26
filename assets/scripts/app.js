'use strict'

const userEvents = require('./user/events')
// const exampleEvents = require('./examples/events')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('submit', userEvents.onSignOut)
  // $('#create-example').on('submit', exampleEvents.onCreateExample)
})
