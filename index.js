const https = require('https')

exports.handler = (event, context, callback) => {
  const mailgunEvent = JSON.parse(event)
  const mailgunError = mailgunEvent['event-data']

  console.log(mailgunError)

  const payload = JSON.stringify({
    text: 'Something went wrong on Mailgun',
    icon_emoji: ':email:'
  })

  const options = {
    hostname: 'hooks.slack.com',
    method: 'POST',
    path: '***REMOVED***'
  }

  const req = https.request(options, res =>
    res.on('data', () => callback(null, 'OK'))
  )
  req.on('error', error => callback(JSON.stringify(error)))
  req.write(payload)
  req.end()
}
