/* eslint-disable spaced-comment */
/* eslint-disable camelcase */
import { prismaClient } from '../../../prisma/prisma'

interface CreateTask {
  title: string
  description: string
  attributedTo?: string
  timeToFinish: string
  authorId?: string
  tasklevel: number
}

class CreateTaskService {
  async execute(
    user_id: string,
    {
      title,
      description,
      attributedTo,
      timeToFinish,
      authorId,
      tasklevel,
    }: CreateTask,
  ) {
    //if (!title || !description || !timeToFinish || !tasklevel) {
    // throw new Error('All fields should be completed!')
    // }

    const task = await prismaClient.tasks.create({
      data: {
        title,
        description,
        attributedTo,
        timeToFinish,
        authorId: user_id,
        tasklevel,
      },
    })

    return { task }
  }
}

export { CreateTaskService }
