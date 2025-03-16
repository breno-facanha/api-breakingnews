import express from 'express'
import connectDatabase from './database/db.js'
import userRoute from './routes/user.route.js'



const app = express();

const port = 3100
connectDatabase()
app.use(express.json())
app.use("/user", userRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))