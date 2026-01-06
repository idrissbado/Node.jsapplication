// Task 3: Use nodemailer to send an email
const nodemailer = require('nodemailer');

// Replace with your actual Gmail and app password
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your.email@gmail.com', // TODO: Replace with your Gmail
        pass: 'your_app_password'     // TODO: Replace with your app password
    }
});

const mailOptions = {
    from: 'your.email@gmail.com',      // TODO: Replace with your Gmail
    to: 'recipient@example.com',       // TODO: Replace with recipient
    subject: 'Hello from Node.js!',
    text: 'This email was sent using Node.js and nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error:', error);
    }
    console.log('Email sent:', info.response);
});