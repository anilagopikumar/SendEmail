require('dotenv').config();
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }
);
let mailOptions = {
    from:'anila.desha094@gmail.com',
    to:'aniladesha46@gmail.com,hemu.desha11@gmail.com',
    cc:'aniladesha46@gmail.com',
    bcc:'aniladesha46@gmail.com',
    subject:'Testing and Testing',
    text:'Hello'
};
transporter.sendMail(mailOptions,function(err,data){
    if (err) {
        console.log('Error Occurs: ',err);
    }
    else {
        console.log('Email Sent!!!!');
    }
});