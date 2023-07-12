export class NotInformedUser extends Error {
  constructor() {
    super('Usuário não informado')
  }
}

export class InvalidUser extends Error {
  constructor() {
    super('E-mail ou token incorreto')
  }
}

export class UserIsNotActive extends Error {
  constructor() {
    super('Este usuário não foi ativado')
  }
}
