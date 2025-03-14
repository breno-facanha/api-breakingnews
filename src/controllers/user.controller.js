const userServce = require("../services/user.service");
const mongoose = require("mongoose")

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await userServce.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error Creating User" });
  }
  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      password,
      avatar,
      background,
    },
  });
};

const findAll = async (req, res) => {
    const users = await userServce.findAllService()
    if(!users === 0){
        return res.status(400).send({ message: "Não a usuários registrados"})
    }

    res.send(users)
}

const findById = async (req, res) => {
  const id = req.params.id

  // verificando id valido !diferente
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).send({message: "Id Inválido"})
  }

  const user = await userServce.findByIdService(id)

  if (!user){
    return res.status(400).send({message: "Usuário não encontrado"})
  }

  res.send(user)
}

const update = async (req, res) => {
  
  const {name, username, email, password, avatar, background} = req.body
  
  if(!name && !username && !email && !password && !avatar && !background){
    res.status(400).send({message: "atualizar um campo pelo menos"})
  }
  
  const id = req.params.id

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).send({message: "Invalid"})
  }

  const user = await userServce.findByIdService(id)

  if(!user) {
    return res.status(400).send({message: "Usuário não encontrado"})
  }

  await userServce.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  )

  res.send({message: "Usuário atualizado com sucesso !"})

}

module.exports = { create, findAll, findById, update };
