/* eslint-disable camelcase */
import { prismaClient } from '../../../../prisma/prisma'

class DetailUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findMany({
      where: {
        OR: [
          {
            id: user_id,
          },
          { fatherId: user_id },
        ],
      },
      select: {
        id: true,
        email: true,
        name: true,
        picProfile: true,
        userXP: true,
        profileColor: true,
      },
    })

    return user
  }
}

export { DetailUserService }
