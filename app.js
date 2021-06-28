import express from 'express'
import mongoose from 'mongoose'
// import config from 'config'

import authRoutes from './routes/auth.routes.js'

const PORT = process.env.PORT || 5000
const mongoUrl = 'mongodb+srv://Abdiyev096:87023548049BOSS@cluster0.bor8n.mongodb.net/my_social_network?retryWrites=true&w=majority'

const app = express()

app.use(express.json())

app.use('/auth', authRoutes)

const start =  () => {
    app.listen(PORT, async () => {
       try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
          })

          console.log(`Server is running on PORT: ${PORT}`)
       } catch (e) {
            console.log(e)
            process.exit(1)
       }
    })
}

start();
console.log(2);