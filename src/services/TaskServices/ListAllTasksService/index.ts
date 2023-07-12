import { prismaClient } from '../../../prisma/prisma'

class ListAllTasksService {
  async execute(userId: string) {
    const tasks = await prismaClient.tasks.findMany({
      where: {
        done: false,
        attributedTo: userId,
      },
    })

    return tasks
  }
}

export { ListAllTasksService }
