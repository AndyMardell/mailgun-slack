# Mailgun Slack Lambda

A lambda function which posts Mailgun webhooks to Slack. It's a fairly simple
setup:

## Create your Slack Webhook

You can create a new Slack webhook using [the webhook app](https://api.slack.com/messaging/webhooks)

## Install

If you're zipping your function up, you first need to install your node modules

```bash
npm i --production
```

## Zip up or deploy

Zip all files or deploy to AWS Lambda

## Add env variables

There area a couple of environment variables which need adding to your lambda
instance:

```
SLACK_WEBHOOK=https://hooks.slack.com/your/webhookurl
MAILGUN_API_KEY=private-mailgun-api-key
```

The above can be added in your AWS console, or as an `.env` file.
