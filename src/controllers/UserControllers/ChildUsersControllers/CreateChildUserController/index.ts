/* eslint-disable camelcase */
import { Request, Response } from 'express'

import { CreateChildUserService } from '../../../../services/UserServices/ChildUsersServices/CreateChildUserService'
import { sendEmailToActiveChildUser } from '../../../../utlis/sendEmailToActiveChildUser'

class CreateChildUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id
    const { name, email, password } = req.body

    const createChildUserService = new CreateChildUserService()

    const user = await createChildUserService.execute(user_id, {
      name,
      email,
      password,
    })

    const token_id = user.emailTokenTActivate

    await sendEmailToActiveChildUser(email, name, token_id)

    return res.status(201).json(user)
  }
}

export { CreateChildUserController }
