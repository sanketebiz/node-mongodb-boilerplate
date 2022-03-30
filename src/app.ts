import express, { Application } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import dbConnection from './db/connection'

config()
dbConnection()

const app: Application = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})
