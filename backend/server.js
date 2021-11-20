import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'

import employeeRoutes from './routes/employeeRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(cors())

// accept JSON data in the body
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/employess', employeeRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
)
