import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRouter from './routes/productRoutes.js'

dotenv.config()


connectDB()
const app = express()

app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/products', productRouter)

const port = process.env.PORT || 5000
app.listen(5000, console.log(`server runing in ${process.env.NODE_ENV} mode on port ${port} `))