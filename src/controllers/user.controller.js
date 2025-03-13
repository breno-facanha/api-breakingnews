const userServce = require("../services/user.service");

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

module.exports = { create, findAll };
