/* eslint-disable camelcase */
import { Request, Response } from 'express'

import { CreateUserService } from '../../../../services/UserServices/CommomUsersServices/CreateUserService'
import { sendEmailToActiveUser } from '../../../../utlis/sendEmailToActiveUser'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      name,
      email,
      password,
    })

    const token_id = user.emailTokenTActivate

    await sendEmailToActiveUser(email, name, token_id)

    return res.status(200).json(user)
  }
}

export { CreateUserController }
