const axios = require('axios')
const generateResponse = require('generateResponse')

exports.handler = async (event, context, callback) => {
  const mailgunEvent = JSON.parse(event.body)
  const mailgunError = mailgunEvent['event-data']

  try {
    await axios.post(process.env.SLACK_WEBHOOK, {
      text: `There was a problem sending mail to ${mailgunError.recipient}
        from ${mailgunError.message.headers.from}. Event: ${mailgunError.event}`
    })
    const response = generateResponse({ result: 'OK' }, 200)
    callback(null, response)
  } catch (err) {
    throw new Error(err)
  }
}
