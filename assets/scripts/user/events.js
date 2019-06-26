'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = events => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess) // gameboard view <div class="pageGame">
    .catch(console.error)
}

const onSignIn = events => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(console.log)
    .catch(console.error)
}
// const onChangePassword = events => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.changePassword(formData)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
// const onSignOut = () => {
//   event.preventDefault()
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

module.exports = {
  onSignUp,
  onSignIn
  // onChangePassword,
  // onSignOut
}
