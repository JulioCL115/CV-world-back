const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USERNAME_MAILER,
        pass: process.env.PASSWORD_MAILER,
    },
});

transporter.verify().then(() => {
    console.log('Ready for send emails')}
);

module.exports = transporter;