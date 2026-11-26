import express from "express"
import { DateTime } from 'luxon'

export const mainRouter = express.Router()

mainRouter.get('/', (req, res)=> {
  res.send('hello world')
})

mainRouter.get('/health', (req, res)=> {
  const now = DateTime.local()
  res.json({data: now.toString()})
})