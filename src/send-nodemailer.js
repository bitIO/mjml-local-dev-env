const nodemailer = require('nodemailer');
const { ethereal, from, subject, to } = require('./settings');
const fs = require('fs');
const { join } = require('path');

async function main() {
  try {
    let transporter = nodemailer.createTransport({
      host: ethereal.host,
      port: ethereal.port,
      secure: ethereal.secure,
      auth: {
        user: ethereal.auth.user,
        pass: ethereal.auth.pass,
      },
    });

    let info = await transporter.sendMail({
      from: `${from.name}  <${from.email}>`,
      to: to
        .map((toEntry) => {
          return `${toEntry.name} <${toEntry.email}>`;
        })
        .join(','),
      subject,
      text: 'Sample from Node mailer. You should not see this',
      html: fs
        .readFileSync(join(__dirname, '..', 'index.html'))
        .toString('utf-8'),
    });

    console.log('Email delivery info');
    console.log(info);

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email from nodemailer');
    console.error(error);
  }
}

main()
  .then(() => console.log('Email(s) sent ✅'))
  .catch(() => console.error('Email(s) not sent 🔥'));
