import express from 'express'
import cors from 'cors'
import connectDB from './db.js'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(cors())

////configure env
dotenv.config()

//connect db
connectDB()
app.use('/', (req, res) => {
  res.send('backend is running')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
