/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { ListChildrenTasks } from '../../../services/TaskServices/ListChildrenTasksService'

class ListChikdrenTasksController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id

    const listChildrenTasks = new ListChildrenTasks()

    const task = await listChildrenTasks.execute(user_id)

    return res.status(200).json(task)
  }
}

export { ListChikdrenTasksController }
