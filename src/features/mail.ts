import nodemailer from 'nodemailer'

export default function sendMail(formValues: Record<string, string>) {
  const transporter = nodemailer.createTransport({
    host: 'mail.flagman-tur.ru.',
    port: 587,
    secure: false, // true для 465, false для 587
    auth: {
      user: import.meta.env.VITE_MAIL_USER,
      pass: import.meta.env.VITE_MAIL_PASS,
    },
  })

  const mailOptions = {
    from: 'test@gmail.com',
    to: 'beatfmt@gmail.com',
    subject: 'Test Email',
    text: `Hello, this is a test email from nodemailer! 
    ${formValues.name}, ${formValues.email}${formValues.message ? ', ' + formValues.message : ''}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка отправки:', error)
    } else {
      console.log('Письмо отправлено:', info.response)
    }
  })
}
