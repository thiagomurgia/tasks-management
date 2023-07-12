/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { ActivateUserService } from '../../../../services/UserServices/CommomUsersServices/ActivateUserService'

class ActivateUserController {
  async handle(req: Request, res: Response) {
    const { token_id } = req.params

    const activateUserService = new ActivateUserService()

    const user = await activateUserService.execute({
      token_id,
    })

    return res
      .status(201)
      .send({ message: 'Ativação de usuário feita com sucesso!' })
  }
}

export { ActivateUserController }
