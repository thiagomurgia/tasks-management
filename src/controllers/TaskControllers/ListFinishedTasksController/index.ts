import { Request, Response } from 'express'
import { ListFinishedTasksService } from '../../../services/TaskServices/ListFinishedTasksService'

class ListFinishedTasksController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id

    const listFinishedTasksService = new ListFinishedTasksService()

    const tasks = await listFinishedTasksService.execute(userId)

    return res.status(200).json(tasks)
  }
}

export { ListFinishedTasksController }
