// Task 3: Use nodemailer to send an email with .env support
require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_TO,
    subject: 'Hello from Node.js!',
    text: 'This email was sent using Node.js, nodemailer, and dotenv.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error:', error);
    }
    console.log('Email sent:', info.response);
});