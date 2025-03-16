import express from 'express'
import connectDatabase from './database/db.js'
import userRoute from './routes/user.route.js'
import dotenv from "dotenv"
dotenv.config();

const app = express();

const port = process.env.PORT || 3100
connectDatabase()
app.use(express.json())
app.use("/user", userRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))