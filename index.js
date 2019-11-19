const https = require('https')

exports.handler = (event, context, callback) => {
  const mailgunEvent = JSON.parse(event.body)
  const mailgunError = mailgunEvent['event-data']

  const payload = JSON.stringify({
    text: `There was a problem sending mail to ${mailgunError.recipient} from
      ${mailgunError.message.headers.from}. Event: ${mailgunError.event}`
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
