const express = require ("express")
const app = express();

const userRoute = require("./routes/user.route")

const port = 3100

app.use("/user", userRoute)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))