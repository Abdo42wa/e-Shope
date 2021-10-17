import Mongoose from 'mongoose'

const connectDB = async () => {

    try {
        const conn = await Mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {

        console.error(`Conection Error ${error.message}`)
    }

}

export default connectDB