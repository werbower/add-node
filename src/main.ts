import express, { type Express } from "express"
import { mainRouter } from "./controllers/main.controller.js"

const app: Express = express()
const port = 3000

app.use(express.json())
app.use(mainRouter)

app.listen(port, ()=> {
  console.log(`app listening on port ${port}`)
})