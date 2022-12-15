# MJML Local Dev Environment

A MJML development environment for testing and sending emails

## Email send configuration

### With Mailjet

To send email, you can setup an account at Mailjet, generate a pair of API
keys/secret and then, modify the `src/settings.js` file (if not present, just
create it) or rename the `src/settings.sample.js` file

Then, to send the emails, from the command line, you can run:
`npm run send:mailjet`

### With Ethereal

With Ethereal, there is no need to create and account, node-mailer will create
a temporal one for you. To send emails, you just need to run
`npm run send:nodemailer`

## MJML live editors

* <https://previewer.mailninja.co.uk/>
* <https://mjml.io/try-it-live>

## Drag and drop email composers

* <https://www.mailjet.com/demo>

## Email servers

* <https://app.mailjet.com/>
* <https://ethereal.email/>

## MJML references

* <https://documentation.mjml.io>

## Node packages references

* <https://www.npmjs.com/package/live-server>
