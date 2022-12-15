const nodemailer = require('nodemailer');
const { api, from, subject, to } = require('./settings');
const fs = require('fs');
const { join } = require('path');

async function main() {
  try {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: from.email,
      to: to.map((toEntry) => toEntry.email).join(','),
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
