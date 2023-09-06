import express from "express";

import authCtrl from "../../controllers/auth.js";
import validateBody from "../../middlewares/validateBody.js";
import { registerSchema, loginSchema } from "../../models/user.js";

const router = express.Router();

router.post("/register", validateBody(registerSchema), authCtrl.register);

router.post("/login", validateBody(loginSchema), authCtrl.login);

export default router;