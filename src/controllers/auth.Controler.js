import bcrypt from "bcrypt";
import { loginService } from "../services/auth.service.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email);

    if (!user){
        return res.status(404).send({message: "Usuário ou senha inválido"})
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if(!passwordIsValid || !user){
        return res.status(400).send({message: "Usuário ou senha inválido"})
    }

    console.log(passwordIsValid)

    res.send("login ok");
  } catch (err) {
    res.status(500).send(err.message)
  }
};

export { login };
