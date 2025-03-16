const userServce = require("../services/user.service");
const mongoose = require("mongoose");

const create = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userServce.findAllService();
    if (!users === 0) {
      return res.status(400).send({ message: "Não a usuários registrados" });
    }

    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: "atualizar um campo pelo menos" });
    }

    const { id, user } = req;

    await userServce.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );

    res.send({ message: "Usuário atualizado com sucesso !" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { create, findAll, findById, update };
