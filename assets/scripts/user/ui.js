'use strict'

const store = require('../store')

const successMessage = message => {
  $('#auth-message').text(message)
  $('#auth-message').removeClass('failure')
  $('#auth-message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#auth-message').text(message)
  $('#auth-message').removeClass('success')
  $('#auth-message').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccess = () => {
  successMessage('Sign up success')
}

const signUpFailure = () => {
  failureMessage('Sign up failed')
}

const signInSuccess = (responseData) => {
  successMessage('Sign in success')
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Wrong email or password')
}

const changePasswordSuccess = (responseData) => {
  successMessage('Password change success')
}

const changePasswordFailure = () => {
  failureMessage('Password change failed')
}

const signOutSuccess = () => {
  successMessage('Sign Out Success')
}

const signOutFailure = () => {
  failureMessage('Sign Out Failure')
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
