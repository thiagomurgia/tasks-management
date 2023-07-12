import { Request, Response } from 'express'

import { AuthUserService } from '../../../../services/UserServices/CommomUsersServices/AuthenticateService'

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authUserService = new AuthUserService()

    const user = await authUserService.execute({
      email,
      password,
    })

    if (!user) {
      return res.send('Error')
    }

    return res.status(200).json(user)
  }
}

export { AuthUserController }
