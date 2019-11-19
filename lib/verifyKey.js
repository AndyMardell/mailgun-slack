const crypto = require('crypto')

module.exports = ({ timestamp, token, signature }) => {
  const encodedToken = crypto
    .createHmac('sha256', process.env.MAILGUN_API_KEY)
    .update(timestamp.concat(token))
    .digest('hex')

  if (encodedToken !== signature) {
    throw new Error('Token invalid')
  }

  return true
}
