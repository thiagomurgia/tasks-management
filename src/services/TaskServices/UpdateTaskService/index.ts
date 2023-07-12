/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { prismaClient } from '../../../prisma/prisma'
import { sendEmailWhenTaskIsCompleted } from '../../../utlis/sendEmailWhenTaskCompleted'
import { DoestNotBelongToThisUser, TaskDoesNotBelongToThisUser } from './error'

class UpdateTaskService {
  async execute(
    user_id: string,
    task_id: string,
    { title, description, done, timeToFinish, updatedAt },
  ) {
    const task = await prismaClient.tasks.findFirst({
      where: {
        id: task_id,
      },
    })

    if (!task) {
      throw new DoestNotBelongToThisUser()
    }

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
    })

    const previousXp = user.userXP

    if (task.attributedTo !== user_id) {
      throw new TaskDoesNotBelongToThisUser()
    }

    const updateTask = await prismaClient.tasks.update({
      where: {
        id: task_id,
      },
      data: {
        title,
        description,
        done,
        timeToFinish,
      },
    })

    if (user.userProfile === '0' && updateTask.done === true) {
      if (updateTask.tasklevel === 1) {
        const nextXp = previousXp + 13
        await prismaClient.user.update({
          where: {
            id: user_id,
          },
          data: {
            userXP: nextXp,
          },
        })
      }
      if (updateTask.tasklevel === 2) {
        const nextXp = previousXp + 27
        await prismaClient.user.update({
          where: {
            id: user_id,
          },
          data: {
            userXP: nextXp,
          },
        })
      }
      if (updateTask.tasklevel === 3) {
        const nextXp = previousXp + 50
        await prismaClient.user.update({
          where: {
            id: user_id,
          },
          data: {
            userXP: nextXp,
          },
        })
      }
    }

    if (user.userProfile === '200' && updateTask.done === true) {
      if (updateTask.tasklevel === 1) {
        const nextXp = previousXp + 13
        await prismaClient.user.update({
          where: {
            id: user_id,
          },
          data: {
            userXP: nextXp,
          },
        })
      }
      if (updateTask.tasklevel === 2) {
        const nextXp = previousXp + 27
        await prismaClient.user.update({
          where: {
            id: user_id,
          },
          data: {
            userXP: nextXp,
          },
        })
      }
      if (updateTask.tasklevel === 3) {
        const nextXp = previousXp + 50
        await prismaClient.user.update({
          where: {
            id: user_id,
          },
          data: {
            userXP: nextXp,
          },
        })
      }
    }

    await sendEmailWhenTaskIsCompleted(user.responsibleEmail, user.name)

    return updateTask
  }
}

export { UpdateTaskService }
