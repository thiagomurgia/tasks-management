import express from 'express'
import multer from 'multer'
import uploadConfig from '../../config/multer'

import { ActivateUserController } from '../../controllers/UserControllers/CommomUsersControllers/ActivateUserController'
import { AuthUserController } from '../../controllers/UserControllers/CommomUsersControllers/AuthenticateUserController'
import { CreateUserController } from '../../controllers/UserControllers/CommomUsersControllers/CreateUserController'
import { ForgotPasswordController } from '../../controllers/UserControllers/CommomUsersControllers/ForgotPasswordController'
import { AuthenticateWithoutPasswordController } from '../../controllers/UserControllers/CommomUsersControllers/AuthenticateWithoutPasswordController'
import { DetailUserController } from '../../controllers/UserControllers/CommomUsersControllers/DatailUserController'
import { isAuthenticated } from '../../middlewares/isAuthenticated'
import { UpdataProfileUserController } from '../../controllers/UserControllers/CommomUsersControllers/UpdateUserProfileController'
import { GetAllSystemUsersController } from '../../controllers/UserControllers/AdminUsersControllers/GetAllUsersController'
import { AdminUpdateUserSystyemController } from '../../controllers/UserControllers/AdminUsersControllers/AdminUpdateUserSystemController'
import { CreateChildUserController } from '../../controllers/UserControllers/ChildUsersControllers/CreateChildUserController'
import { GetUserSystemController } from '../../controllers/UserControllers/CommomUsersControllers/UserSystemController'

const router = express.Router()

const upload = multer(uploadConfig.upload('./tmp'))

// commom user routes
router.post('/signup', new CreateUserController().handle)
router.post('/auth', new AuthUserController().handle)
router.get('/activate/:token_id', new ActivateUserController().handle)
router.post('/forgotpassword', new ForgotPasswordController().handle)
router.post('/authtoken', new AuthenticateWithoutPasswordController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.put(
  '/me',
  isAuthenticated,
  upload.single('file'),
  new UpdataProfileUserController().handle,
)

router.get('/me/users', isAuthenticated, new GetUserSystemController().handle)

// child user routes
router.post(
  '/childuser',
  isAuthenticated,
  new CreateChildUserController().handle,
)

// admin user routes
router.get('/dashboard', isAuthenticated, new DetailUserController().handle)
router.get('/users', isAuthenticated, new GetAllSystemUsersController().handle)
router.put(
  '/user/:systemUser_id',
  isAuthenticated,
  new AdminUpdateUserSystyemController().handle,
)

export { router }
