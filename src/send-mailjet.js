const fs = require('fs');
const { join } = require('path');
const Mailjet = require('node-mailjet');

const {
  mailjet: { api },
  from,
  subject,
  to,
} = require('./settings');

const mailjet = new Mailjet({
  apiKey: api.key,
  apiSecret: api.secret,
});

const options = {
  AdvanceErrorHandling: true,
  Messages: [
    {
      From: {
        Email: from.email,
        Name: from.name,
      },
      To: to.map((toEntry) => ({
        Email: toEntry.email,
        Name: toEntry.name,
      })),
      Subject: subject,
      TextPart: 'My first Mailjet email',
      HTMLPart: fs
        .readFileSync(join(__dirname, '..', 'index.html'))
        .toString('utf-8'),
    },
  ],
  // SandboxMode: true,
};
const request = mailjet.post('send', { version: 'v3.1' }).request(options);

request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log('ErrorCode:', err.ErrorCode);
    console.log('ErrorId:', err.ErrorIdentifier);
    console.log('ErrorMessage:', err.ErrorMessage);
    console.log('ErrorRelatedTo:', err.ErrorRelatedTo);
    console.log('message:', err.message);
    console.log('statusCode:', err.statusCode);
  });
