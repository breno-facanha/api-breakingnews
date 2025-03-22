import express from 'express'
import connectDatabase from './database/db.js'
import dotenv from "dotenv"

import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config();

const app = express();

const port = process.env.PORT || 3100
connectDatabase()
app.use(express.json())
app.use("/user", userRoute)
app.use("/auth", authRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))