export class DoestNotBelongToThisUser extends Error {
  constructor() {
    super('Tarefa não encontrada')
  }
}

export class TaskDoesNotBelongToThisUser extends Error {
  constructor() {
    super('Tarefa não pode ser encerrada, não foi atribuída a este usuário')
  }
}
