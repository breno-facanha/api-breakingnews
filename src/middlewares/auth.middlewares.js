import userService from "../services/user.service.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.send(401);
    }

    const parts = authorization.split(" ");

    const [schema, token] = parts;

    if (parts.length !== 2) {
      return res.send(401);
    }

    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Token Inválido !" });
      }
      const user = await userService.findByIdService(decoded.id);

      if (!user || !user.id) {
        return res.status(401).send({ message: "Token Inválido !" });
      }
      req.userId = user.id;
      return next();
    });


  } catch (error) {
    res.status(500).send(error.message);
  }
};
