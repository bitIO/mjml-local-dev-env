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

Create an account at <https://ethereal.email/create> and place the provided
configuration under ethereal in you settings file. Then, to send emails, you
just need to run `npm run send:nodemailer`

 ‼️ Remember that if sending messages through Ethereal SMTP then no message is
 actually delivered, all messages are caught and you can see these in the
 Messages page or by using your favorite IMAP/POP3 client.

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

---

Made with ❤️ for Sandra
