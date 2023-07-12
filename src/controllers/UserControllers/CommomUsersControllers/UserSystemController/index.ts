/* eslint-disable camelcase */
import { Request, Response } from 'express'

import { GetUserSystemService } from '../../../../services/UserServices/CommomUsersServices/UserSystem'

class GetUserSystemController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id

    const getUserSystemService = new GetUserSystemService()

    const user = await getUserSystemService.execute(user_id)

    return res.json(user).status(200)
  }
}

export { GetUserSystemController }
