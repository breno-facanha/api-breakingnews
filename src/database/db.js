const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Tetando se conectar ao banco");

  mongoose
    .connect(
      "mongodb+srv://brenofacanhati:UFogfjMid3sPA0Uu@cluster0.rj4om.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Mongo Atlas Conectado"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
