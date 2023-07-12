/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { UpdateTaskService } from '../../../services/TaskServices/UpdateTaskService'

class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const { task_id } = req.params
    const user_id = req.user_id
    const { title, description, done, timeToFinish } = req.body

    const updateTaskService = new UpdateTaskService()

    const updateTask = await updateTaskService.execute(user_id, task_id, {
      title,
      description,
      done,
      timeToFinish,
      updatedAt: new Date(),
    })

    return res.status(200).json({ updateTask })
  }
}

export { UpdateTaskController }
