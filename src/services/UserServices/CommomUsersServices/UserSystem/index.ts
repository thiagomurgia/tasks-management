/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { prismaClient } from '../../../../prisma/prisma'

class GetUserSystemService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        email: true,
        name: true,
        picProfile: true,
        userXP: true,
      },
    })

    const childUser = await prismaClient.user.findFirst({
      where: {
        fatherId: user_id,
      },
      select: {
        email: true,
        name: true,
        picProfile: true,
        userXP: true,
        fatherId: true,
      },
    })

    return user
  }
}

export { GetUserSystemService }
