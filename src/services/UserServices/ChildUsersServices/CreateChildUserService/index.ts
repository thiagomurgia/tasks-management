/* eslint-disable camelcase */
import { hash } from 'bcrypt'
import { prismaClient } from '../../../../prisma/prisma'

interface CreateChildUserRequest {
  name: string
  email: string
  password: string
}

class CreateChildUserService {
  async execute(
    user_id: string,
    { name, email, password }: CreateChildUserRequest,
  ) {
    if (!name || !email || !password) {
      throw new Error('Nome ou email não informado!')
    }

    const usersAlreadyExistis = await prismaClient.user.findFirst({
      where: {
        email,
      },
    })

    if (usersAlreadyExistis) {
      throw new Error('Usuário já cadastrado!')
    }

    const fatherUser = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    })

    const passwordHash = await hash(password, 10)

    // eslint-disable-next-line no-unused-vars
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
        responsibleEmail: fatherUser.email,
      },
      select: {
        id: true,
        name: true,
        emailTokenTActivate: true,
        responsibleEmail: true,
      },
    })

    const updateChildId = await prismaClient.user.update({
      where: {
        email,
      },
      data: {
        fatherId: user_id,
      },
      select: {
        emailTokenTActivate: true,
        name: true,
        email: true,
      },
    })

    return updateChildId
  }
}

export { CreateChildUserService }
