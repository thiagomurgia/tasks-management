/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { CreateTaskService } from '../../../services/TaskServices/CreateTaskService'

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id
    const { title, attributedTo, description, timeToFinish, tasklevel } =
      req.body

    const createTaskService = new CreateTaskService()

    const task = await createTaskService.execute(user_id, {
      title,
      attributedTo,
      description,
      timeToFinish,
      tasklevel,
    })

    return res.status(201).json(task)
  }
}

export { CreateTaskController }
