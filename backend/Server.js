import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import OrderRoute from './routes/orderRoutes.js'
import UploadRoutes from './routes/uploadRoutes.js'


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
app.use('/api/orders', OrderRoute)
app.use('/api/upload', UploadRoutes)

app.use('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))




app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 5000
app.listen(5000, console.log(`server runing in ${process.env.NODE_ENV} mode on port ${port} `))