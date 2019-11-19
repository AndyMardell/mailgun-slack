const crypto = require('crypto')

module.exports = ({ timestamp, token, signature }) => {
  const timeToken = timestamp.concat(token)
  const hmac = crypto
    .createHmac('sha256', process.env.SLACK_WEBHOOK)
    .write(timeToken)
    .end()

  const encodedToken = hmac.read().toString('hex')

  console.log('toke', encodedToken, signature)

  if (encodedToken !== signature) {
    throw new Error('Token invalid')
  }

  return true
}
