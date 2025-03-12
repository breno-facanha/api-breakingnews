const express = require ("express")
const userRoute = require("./routes/user.route")
const app = express();

app.use("/soma", userRoute)

app.listen(3100)