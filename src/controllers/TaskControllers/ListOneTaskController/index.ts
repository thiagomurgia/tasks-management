/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { ListOneTaskService } from '../../../services/TaskServices/ListOneTaskService'

class ListOneTaskController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id
    const { task_id } = req.params

    const listOneTaskService = new ListOneTaskService()

    const task = await listOneTaskService.execute(user_id, task_id)

    return res.status(200).json(task)
  }
}

export { ListOneTaskController }
