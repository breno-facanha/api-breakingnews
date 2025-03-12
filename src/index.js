const express = require ("express")
const app = express();
const connectDatabase = require ("./database/db")

const userRoute = require("./routes/user.route")

const port = 3100
connectDatabase()
app.use(express.json())
app.use("/user", userRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))