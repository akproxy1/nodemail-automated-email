const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv/config");
const port = 3000;

let message = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      
    </head>
    <body>
      <b>Hello, How are you doing from html</b>
    </body>
  </html>`;

async function main() {
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "<proxiiman@outlook.com>", // sender address
    to: "akproxy1@gmail.com", // list of receivers
    subject: "Hello to zuri team", // Subject line
    text: "Hello, how are you from text", // plain text body
    html: message, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
