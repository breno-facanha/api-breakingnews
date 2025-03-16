import mongoose from "mongoose"

const connectDatabase = () => {
  console.log("Tetando se conectar ao banco");

  mongoose
    .connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Mongo Atlas Conectado"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
