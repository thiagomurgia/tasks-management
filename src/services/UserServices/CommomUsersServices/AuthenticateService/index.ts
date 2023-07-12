import { prismaClient } from '../../../../prisma/prisma'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import 'dotenv/config'
import { InvalidUser, NotInformedUser, UserIsNotActive } from './error'

interface AuthUserRequest {
  email: string
  password: string
}

class AuthUserService {
  async execute({ email, password }: AuthUserRequest) {
    if (!email || !password) {
      throw new NotInformedUser()
    }

    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    })

    const userId = user.id
    const userEmail = user.email
    const userName = user.name

    if (!user) {
      throw new InvalidUser()
    }

    if (user.password === null) {
      throw new Error(
        'Ops! Detectamos que é um usuário dependente, você deve criar uma senha para poder se logar',
      )
    }

    const doesPasswodMatch = await compare(password, user.password)

    if (!doesPasswodMatch) {
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
      },
      process.env.SECRET_JWT,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    )

    return {
      userId,
      userEmail,
      userName,
      token,
    }
  }
}

export { AuthUserService }
