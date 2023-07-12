/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { prismaClient } from '../../../prisma/prisma'
import { DoestNotBelongToThisUser, TaskNotFound } from './error'

class DeleteTaskService {
  async execute(user_id: string, task_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    })

    if (user.picProfile !== '200') {
      throw new DoestNotBelongToThisUser()
    }

    const task = await prismaClient.tasks.findFirst({
      where: {
        id: task_id,
      },
    })

    if (!task) {
      throw new TaskNotFound()
    }

    const deletedTask = await prismaClient.tasks.delete({
      where: {
        id: task_id,
      },
    })
  }
}

export { DeleteTaskService }
