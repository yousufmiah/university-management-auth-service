import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// import usersService from './app/modules/users/users.service'
import usersRouter from './app/modules/users/user.route'
const app: Application = express()

//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes

app.use('/api/v1/users/', usersRouter)

//testing
app.get('/', async (req: Request, res: Response) => {
  // await usersService.createUser({
  //   id: '999',
  //   password: '1234',
  //   role: 'student',
  // })

  res.send('Working Successfully')
})

export default app
