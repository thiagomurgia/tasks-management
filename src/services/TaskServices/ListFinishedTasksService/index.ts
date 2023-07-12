import { prismaClient } from '../../../prisma/prisma'

class ListFinishedTasksService {
  async execute(userId: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    })

    if (user.userProfile !== '200') {
      const tasks = await prismaClient.tasks.findMany({
        where: {
          attributedTo: userId,
          done: true,
        },
      })
      return tasks
    }

    const tasks = await prismaClient.tasks.findMany({
      where: {
        done: true,
      },
    })

    return { tasks }
  }
}

export { ListFinishedTasksService }
