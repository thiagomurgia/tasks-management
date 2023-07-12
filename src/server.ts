import dotenv from 'dotenv'
import cors from 'cors'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

import path from 'path'

import express, { Request, Response, NextFunction } from 'express'
import { router as userRoutes } from './routes/userRoutes/routes'
import { router as tasksrouter } from './routes/tasksRouter/routes'
dotenv.config()

const server = express()

server.use(express.json())
server.use(
  cors({
    credentials: true,
    origin: '*',
  }),
)

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

server.use(userRoutes, tasksrouter)

server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    })
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

const portRunning = process.env.PORT

server.listen(portRunning, () => {
  console.log(`Server is running! On port:${portRunning}`)
})
