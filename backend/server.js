import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import path from 'path';


dotenv.config()
const app = express()
connectDB()


app.use('/api/products', productRoutes)


const __dirname = path.resolve()
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontebd', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running')
    })
}
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode running on port ${PORT}`.green.bold))