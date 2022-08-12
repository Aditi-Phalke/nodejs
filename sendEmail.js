const express = require("express");
const nodemailer=require("nodemailer");
//const sendgridTransport = require("nodemailer-sendgrid-transport");
const app = express();

let transporter = nodemailer.createTransport({
    service:"gmail",
    //port:"587",
    //secure:"false",
    auth:{
    //api_key:'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',
    user: 'aditiphalke1615@gamil.com',
    pass: 'Adi@1615'
    }
    //debug: true,
    //logger: true
});
let mailOptions={
    from:"aditiphalke1615@gmail.com",
    to:"aditiphalke1759@gmail.com",
    subject:"Testing",
    text:"First email send from nodejs using nodemailer"
};
//let mailTransporter = nodemailer.createTransport(transporter);

transporter.sendMail(mailOptions, function(err, success){
    if(err){
        console.log(err);
    }
    else{
        console.log("sent email successfully" +success.response);
    }
});

//app.listen(5000);