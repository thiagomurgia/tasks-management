/* eslint-disable camelcase */
import { prismaClient } from '../../../prisma/prisma'

class ListChildrenTasks {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        fatherId: user_id,
      },
    })

    const sonUser = user.id

    console.log(sonUser)

    const tasks = await prismaClient.tasks.findMany({
      where: {
        attributedTo: sonUser,
        done: false,
      },
    })

    return { tasks }
  }
}

export { ListChildrenTasks }
