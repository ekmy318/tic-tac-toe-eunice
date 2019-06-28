'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const signUpSuccess = () => {
  successMessage('Sign up success')
  $('#sign-up').addClass('hide')
  $('#guest-player').addClass('hide')
}

const signUpFailure = () => {
  failureMessage('Sign up failed')
}

const signInSuccess = (responseData) => {
  successMessage('Log in successful')
  console.log('responseData is: ', responseData)
  store.user = responseData.user
  console.log('store after signin: ', store)
  console.log('responseData after store: ', responseData)
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#new-game').removeClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#guest-player').addClass('hide')
  $('form').trigger('reset')
}

const signInFailure = () => {
  failureMessage('Wrong email or password')
}

const changePasswordSuccess = (responseData) => {
  successMessage('Password changed successfully')
}

const changePasswordFailure = () => {
  failureMessage('Password change failed')
}

const signOutSuccess = () => {
  successMessage('Sign Out Success')
  $('#change-password').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#new-game').addClass('hide')
  $('#sign-up').removeClass('hide')
  $('#sign-in').removeClass('hide')
  $('#gameboard').addClass('hide')
  $('#guest-player').removeClass('hide')
}

const signOutFailure = () => {
  failureMessage('Sign Out Failure')
  $('.square').text('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
