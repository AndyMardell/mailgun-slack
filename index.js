const axios = require('axios')
const generateResponse = require('./lib/generateResponse')
const verifyKey = require('./lib/verifyKey')

exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body)
  const data = body['event-data']

  console.log(body)

  try {
    verifyKey(body.signature)
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
