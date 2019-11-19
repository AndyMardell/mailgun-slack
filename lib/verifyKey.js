const crypto = require('crypto')

module.exports = ({ timestamp, token, signature }) => {
  const timeToken = timestamp.concat(token)
  const encodedToken = crypto
    .createHmac('sha256', process.env.MAILGUN_API_KEY)
    .update(timeToken)
    .digest('hex')

  console.log('toke', encodedToken, signature)

  if (encodedToken !== signature) {
    throw new Error('Token invalid')
  }

  return true
}