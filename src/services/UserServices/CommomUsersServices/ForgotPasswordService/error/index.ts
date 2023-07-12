export class NotInformedUser extends Error {
  constructor() {
    super('Usuário não informado')
  }
}

export class UserIsNotActive extends Error {
  constructor() {
    super('Este usuário não foi ativado')
  }
}
