import express from 'express'
import connectDatabase from './database/db.js'
import dotenv from "dotenv"
import cors from "cors"
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import newsRoute from './routes/news.route.js'
import swaggerRoute from './routes/swagger.route.js'

dotenv.config();

const app = express();

const port = process.env.PORT || 3100
app.use(cors())
connectDatabase()
app.use(express.json())
app.use("/user", userRoute)
app.use("/auth", authRoute)
app.use("/news", newsRoute)
app.use("/doc", swaggerRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))