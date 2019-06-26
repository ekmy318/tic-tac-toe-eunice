'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signUpSuccess = () => {
  $('form').trigger('reset')
}

const signUpFailure = () => {
  failureMessage('Sign up failed!')
}

const signInSuccess = (responseData) => {
  console.log('responseData is', responseData)
  successMessage('Sign in success!')

  // keeping track of user to have token for api
  // use 'store' to access token in any file
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Wrong email or password')
}

// const changePasswordSuccess = (responseData) => {
//   successMessage('Password change success!')
// }
//
// const changePasswordFailure = () => {
//   failureMessage('Password change failed!')
// }
//
// const signOutSuccess = () => {
//   successMessage('Sign Out Success!')
// }
//
// const signOutFailure = () => {
//   failureMessage('Sign Out Failure')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
