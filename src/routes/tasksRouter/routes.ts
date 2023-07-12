import express from 'express'
import { CreateTaskController } from '../../controllers/TaskControllers/CreateTasksController'
import { DeleteTaskController } from '../../controllers/TaskControllers/DeleteTaskController'
import { ListAllTasksController } from '../../controllers/TaskControllers/ListAllTasksController'
import { ListChikdrenTasksController } from '../../controllers/TaskControllers/ListChildrenTasksController'
import { ListFinishedTasksController } from '../../controllers/TaskControllers/ListFinishedTasksController'
import { ListOneTaskController } from '../../controllers/TaskControllers/ListOneTaskController'
import { UpdateTaskController } from '../../controllers/TaskControllers/UpdateTaskController'
import { isAuthenticated } from '../../middlewares/isAuthenticated'

const router = express.Router()

// tasks router
router.post('/task', isAuthenticated, new CreateTaskController().handle)

router.get('/tasks', isAuthenticated, new ListAllTasksController().handle)

router.get(
  '/attributedto',
  isAuthenticated,
  new ListChikdrenTasksController().handle,
)

router.put('/task/:task_id', isAuthenticated, new UpdateTaskController().handle)

router.get(
  '/finishedtasks',
  isAuthenticated,
  new ListFinishedTasksController().handle,
)

router.get(
  '/task/:task_id',
  isAuthenticated,
  new ListOneTaskController().handle,
)

router.delete(
  '/task/:task_id',
  isAuthenticated,
  new DeleteTaskController().handle,
)

export { router }
