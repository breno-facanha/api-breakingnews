const mongoose = require("mongoose");
const userServce = require("../services/user.service");

const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Id Inválido" });
    }

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const validUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await userServce.findByIdService(id);

    if (!user) {
      return res.status(400).send({ message: "Usuário não encontrado" });
    }

    req.id = id;
    req.user = user;

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { validId, validUser };
