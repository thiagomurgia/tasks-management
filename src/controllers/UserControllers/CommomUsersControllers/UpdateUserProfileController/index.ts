/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { Request, Response } from 'express'

import { UpdateUserProfileService } from '../../../../services/UserServices/CommomUsersServices/UpdateUserProfileService'

class UpdataProfileUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id
    const { name, password } = req.body

    const updateUserProfileService = new UpdateUserProfileService()

    const { originalname, filename: picProfile } = req.file

    const user = await updateUserProfileService.execute(user_id, {
      name,
      password,
      picProfile,
    })

    return res
      .json({
        name,
        picProfile,
      })
      .status(200)
  }
}

export { UpdataProfileUserController }
