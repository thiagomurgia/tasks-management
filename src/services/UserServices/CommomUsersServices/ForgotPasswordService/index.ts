import { prismaClient } from '../../../../prisma/prisma'
import { sendEmailToChangePassword } from '../../../../utlis/sendEmailToChangePassword'
import { NotInformedUser, UserIsNotActive } from './error'

interface AuthUserRequest {
  email: string
}

class ForgotPasswordService {
  async execute({ email }: AuthUserRequest) {
    if (!email) {
      throw new NotInformedUser()
    }

    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    })

    const userIsActive = user.userIsActive

    if (!user || userIsActive === false) {
      throw new UserIsNotActive()
    }

    let token: number

    // eslint-disable-next-line prefer-const
    token = Math.floor(Math.random() * 12345) + 999999

    await prismaClient.user.update({
      where: {
        email,
      },
      data: {
        tokenToRedefinePassword: token,
      },
    })

    await sendEmailToChangePassword(user.email, user.name, token)

    return token
  }
}

export { ForgotPasswordService }
