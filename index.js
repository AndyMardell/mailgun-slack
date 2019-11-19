const axios = require('axios')
const generateResponse = require('../lib/generateResponse')

exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body)
  const data = body['event-data']

  try {
    await axios.post(process.env.SLACK_WEBHOOK, {
      text: `There was a problem sending mail to ${data.recipient}
        from ${data.message.headers.from}. Event: ${data.event}`
    })
    const response = generateResponse({ result: 'OK' }, 200)
    callback(null, response)
  } catch (err) {
    throw new Error(err)
  }
}
