import express from "express";

import usersCtrl from "../../controllers/auth.js";
import validateBody from "../../middlewares/validateBody.js";
import { registerSchema, loginSchema } from "../../models/user.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.post("/register", validateBody(registerSchema), usersCtrl.register);

router.post("/login", validateBody(loginSchema), usersCtrl.login);

router.get("/current", authenticate, usersCtrl.getCurrent);

router.post("/logout", authenticate, usersCtrl.logout);

export default router;