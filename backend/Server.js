import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'

dotenv.config()


connectDB()
const app = express()
//to exept json data in the body
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

const port = process.env.PORT || 5000
app.listen(5000, console.log(`server runing in ${process.env.NODE_ENV} mode on port ${port} `))