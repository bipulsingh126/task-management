import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from './routes/userRoute.js'

const app = express()

app.use(express.json())
app.use(cors())

////configure env
dotenv.config()

//connect db
connectDB() 

// api endpoint
app.use('/api/v1', userRouter);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
