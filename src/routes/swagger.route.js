import  Router  from "express";
const router = Router();

import swaggerUi from "swagger-ui-express";
import swaggerDocumentation from "../swagger.json" with { type: "json"}

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocumentation));

export default router;
