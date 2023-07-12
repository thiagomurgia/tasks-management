export class DoestNotBelongToThisUser extends Error {
  constructor() {
    super('A tarefa solicitada não pertence a este usuário.')
  }
}

export class TaskNotFound extends Error {
  constructor() {
    super('Tarefa não encontrada')
  }
}
