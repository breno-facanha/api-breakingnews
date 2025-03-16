import router from 'express'
import userController from '../controllers/user.controller.js'
const route = router.Router();

import { validId, validUser} from "../middlewares/global.middlewares.js"

route.post("/", userController.create)
route.get("/", userController.findAll)
route.get("/:id", validId, validUser, userController.findById)
route.patch("/:id", validId, validUser, userController.update)

export default route