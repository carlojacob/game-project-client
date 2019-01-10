'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Require files referenced in this document
const authenticationEvents = require('./auth/events')
const gameEventsLogic = require('./game/events-logic')

// Items hidden on initial page load
$('#game-board').hide()
$('#change-password-sign-out').hide()
$('#reset-and-history').hide()
for (let i = 0; i < 6; i++) {
  $('#history-output' + i).hide()
}
$('#ok').hide()

// Click events for authentication forms
$(() => {
  $('#sign-up').on('submit', authenticationEvents.onSignUp)
  $('#sign-in').on('submit', authenticationEvents.onSignIn)
  $('#change-password').on('submit', authenticationEvents.onChangePassword)
  $('#sign-out').on('submit', authenticationEvents.onSignOut)
})

// Click events for game play, reset and history
$(() => {
  $('#game-board > div > div > div').on('click', gameEventsLogic.onSpaceClick)
  $('#reset').on('click', gameEventsLogic.onResetClick)
  $('#game-history').on('click', gameEventsLogic.onGameHistoryClick)
  $('#ok-button').on('click', gameEventsLogic.onOKClick)
})
