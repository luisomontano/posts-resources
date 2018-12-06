/* global importScripts, self, firebase */

importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js')

firebase.initializeApp({
  'messagingSenderId': '891864304902'
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(payload => {
  console.log(payload)
  const notificationTitle = payload.data.title
  const notificationOptions = {
    body: payload.data.body
  }

  return self.registration.showNotification(notificationTitle,
    notificationOptions)
})
