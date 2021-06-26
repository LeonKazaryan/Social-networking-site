import express from 'express'
import authRoutes from './routes/auth.routes.js'

const PORT = process.env.PORT || 5000

const app = express()

app.use('/auth', authRoutes)

const start = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`)
    })
}

start();
console.log(2);