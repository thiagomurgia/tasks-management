/* eslint-disable camelcase */
import nodemailer from 'nodemailer'
import 'dotenv/config'

export async function sendEmailToActiveChildUser(
  email: string,
  name: string,
  // eslint-disable-next-line camelcase
  token_id: string,
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
    subject: 'Criação de conta (sistema X)',
    text: 'Email enviado.',
    html: `<br/>
          <p style="font-size: 16px>Olá! Seja muito bem vindo ${name}! <p/>
          <p style="font-size: 16px>Seu e-mail para acesso é o: <b> ${email}</b> <p/>
          <p style="font-size: 16px>Sua senha para acesso deve ser verificada com seu tutor. <p/>
          <p style="font-size: 16px"><b>Copie o link abaixo e cole na sua barra de endereço, para confirmar seu e-mail:<b/><p/>
          
          <p style="font-size: 16px">http:localhost:3333/activate/${token_id}<p/>`,
  }

  transport.sendMail(mailOptions as object, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
  })
}
