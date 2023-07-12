/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { ListAllTasksService } from '../../../services/TaskServices/ListAllTasksService'

class ListAllTasksController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id
    const listAllTasksService = new ListAllTasksService()

    const task = await listAllTasksService.execute(user_id)

    return res.status(200).json(task)
  }
}

export { ListAllTasksController }
