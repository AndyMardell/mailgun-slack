const crypto = require('crypto')

module.exports = ({ timestamp, token, signature }) => {
  const timeToken = timestamp.concat(token)
  const encodedToken = crypto
    .createHmac('sha256', process.env.SLACK_WEBHOOK)
    .update(timeToken)

  console.log('toke', encodedToken, signature)

  if (encodedToken !== signature) {
    throw new Error('Token invalid')
  }

  return true
}
