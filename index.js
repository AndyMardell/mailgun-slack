const axios = require('axios')

exports.handler = async (event, context, callback) => {
  const mailgunEvent = JSON.parse(event.body)
  const mailgunError = mailgunEvent['event-data']

  try {
    await axios.post(
      '***REMOVED***',
      {
        text: `There was a problem sending mail to ${mailgunError.recipient}
        from ${mailgunError.message.headers.from}. Event: ${mailgunError.event}`
      }
    )
    callback(null, 'OK')
  } catch (err) {
    throw new Error(err)
  }
}
