module.exports = {
  mailjet: {
    api: {
      key: '63e0*******',
      secret: '5f83*******',
    },
  },
  ethereal: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'alfred.marks76@ethereal.email',
      pass: 'GmHGFpZVMdjChr94E5',
    },
  },
  from: {
    email: 'your.gmail.user@gmail.com',
    name: 'your name',
  },
  subject: 'My MJML preview',
  to: [
    { email: 'one.email@gmail.com', name: 'email 1' },
    { email: 'two.email@gmail.com', name: 'email 2' },
    { email: 'three.email@gmail.com', name: 'email 3' },
  ],
};
