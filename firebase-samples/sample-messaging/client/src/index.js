/* global fetch,
FIREBASE_API_KEY,
FIREBASE_AUTH_DOMAIN,
FIREBASE_DATABASE_URL,
FIREBASE_PROJECT_ID,
FIREBASE_STORAGE_BUCKET,
FIREBASE_MESSAGING_SENDER_ID,
PUBLIC_SERVER_KEY,
ENDPOINT_SAVE_SUBSCRIPTION */
import firebase from 'firebase/app'
import 'firebase/messaging'

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

function retrieveToken () {
  return messaging.getToken()
}

function sendTokenToBackEnd (token) {
  console.log(token)
  return fetch(ENDPOINT_SAVE_SUBSCRIPTION, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
  })
}

function init () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      messaging.usePublicVapidKey(PUBLIC_SERVER_KEY)
      messaging.requestPermission()
        .then(retrieveToken)
        .then(sendTokenToBackEnd)
        .catch(error => console.error(error))
    })
  }
}

init()
