/* eslint-disable camelcase */
import nodemailer from 'nodemailer'
import 'dotenv/config'

export async function sendEmailWhenTaskIsCompleted(
  email: string,
  name: string,
) {
  const transport = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
      type: 'LOGIN',
    },
  })

  const mailOptions = {
    from: 'Sistema X <sistema.tarefas@hotmail.com>',
    to: `${email}`,
    subject: `Tarefa concluída por ${name} (sistema X)`,
    text: 'Email enviado.',
    html: `<br/>
          <p style="font-size: 16px>Olá o(a) ${name}, terminou mais uma tarefa! <p/>
          <p style="font-size: 16px>Aproveite e dê os parabéns para ${name}, e mostre como você apoia em cada etapa do processo! <p/>`,
  }

  transport.sendMail(mailOptions as object, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
  })
}
