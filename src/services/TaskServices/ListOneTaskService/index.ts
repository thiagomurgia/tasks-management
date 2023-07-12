/* eslint-disable camelcase */
import { prismaClient } from '../../../prisma/prisma'
import { DoestNotBelongToThisUser, TaskNotFound } from './error'

class ListOneTaskService {
  async execute(user_id: string, task_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    })

    const task = await prismaClient.tasks.findFirst({
      where: {
        id: task_id,
      },
    })

    if (!user.fatherId) {
      return { task }
    }
    if (user.userProfile === '0') {
      if (task.attributedTo !== user_id) {
        throw new DoestNotBelongToThisUser()
      }
      return { task }
    }

    if (!task) {
      throw new TaskNotFound()
    }

    return { task }
  }
}

export { ListOneTaskService }
