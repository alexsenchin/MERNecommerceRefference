import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.yellow.bold)
    } catch (error) {
        console.log(`Error ${error.message}`.red.bold)
        process.exit(1)
    }
}


export default connectDB