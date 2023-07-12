import { prismaClient } from '../../../../prisma/prisma'
import { sign } from 'jsonwebtoken'
import 'dotenv/config'
import { InvalidUser, NotInformedUser, UserIsNotActive } from './error'

interface AuthUserRequest {
  email: string
  tokenpass: number
}

class AuthenticateWithoutPasswordService {
  async execute({ email, tokenpass }: AuthUserRequest) {
    if (!email || !tokenpass) {
      throw new NotInformedUser()
    }

    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    })
    const tokenWithoutPass = user.tokenToRedefinePassword

    if (!user || !tokenpass) {
      throw new InvalidUser()
    }

    if (tokenWithoutPass.toString() !== tokenpass.toString()) {
      throw new InvalidUser()
    }

    const doesUserIsActive = user.userIsActive.valueOf()

    if (!doesUserIsActive) {
      throw new UserIsNotActive()
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
        email_token: user.emailTokenTActivate,
      },
      process.env.SECRET_JWT,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    )

    return {
      token,
    }
  }
}

export { AuthenticateWithoutPasswordService }
