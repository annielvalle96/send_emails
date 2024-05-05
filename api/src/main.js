const express = require('express')
const nodemailer = require('nodemailer')

const PORT = 3000
const app = express()

// Route to sned the email.
app.post('/mail', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 465,
    secure: false,
    auth: {
      user: 'af81cad500b50f',
      pass: '36a90080b8bbff'
    }
  })
  return transporter.sendMail({
    from: '"Email Node App" <emailnodeapp@example.com>', // sender address
    to: 'annielvallevalera@gmail.com', // list of receivers
    subject: 'Email con nodemailer', // Subject line
    // text: 'Enviado emails desde mi app de NodeJS con nodemailer', // plain text body
    html: '<h1>Hello world?</h1><p>Enviado emails desde mi app de NodeJS con nodemailer</p>' // html body
  }, (err, info) => {
    if (err) res.status(200).send({ success: false, error: err })
    return res.status(200).send({
      success: true,
      message: 'email sent!'
    })
  })
})

app.listen(PORT, console.log(`App listening on PORT ${PORT}`))
