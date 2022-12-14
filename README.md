# MJML Local Dev Environment

A MJML development environment for testing and sending emails

## Email send configuration

To send email. you can setup an account at Mailjet, generate a pair of API keys/secret
and then, modify the `src/mailjet/settings.js` file (if not present, just create it) or
rename the `src/mailjet/settings.sample.js` file

Then, to send the emails, from the command line, you can run: `npm run send:mailjet`

## References

* <https://documentation.mjml.io>
* <https://www.npmjs.com/package/live-server>
