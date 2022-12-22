import { Router } from 'express'
import QueryMysql from './QueryMysql/index'
const router = Router()

router.get('/', (req, res) => {
  res.send('Welcome to home page')
})

export default router
