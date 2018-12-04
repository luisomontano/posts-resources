const admin = require('firebase-admin')
var serviceAccount = require('../../conf/accountServiceFirebase.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dezkacv.firebaseio.com'
})

module.exports = (req, res) => {
  const token = req.body.token

  const message = {
    data: {
      title: 'Welcome',
      body: 'Now I can send you messages'
    },
    token
  }

  admin.messaging().send(message)
    .then((data) => {
      console.log(data)
      res.status(200).json({ success: true })
    })
    .catch(
      err => {
        console.error(err)
        res.status(400).json(err)
      }
    )
}
