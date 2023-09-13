import express from "express";

import usersCtrl from "../../controllers/auth.js";
import validateBody from "../../middlewares/validateBody.js";
import { registerSchema, loginSchema, emailSchema } from "../../models/user.js";
import authenticate from "../../middlewares/authenticate.js";
import upload from "../../middlewares/upload.js";

const router = express.Router();

router.post("/register", validateBody(registerSchema), usersCtrl.register);

router.get("/verify/:verificationToken", usersCtrl.verifyEmail);

router.post(
  "/verify",
  validateBody(emailSchema),
  usersCtrl.repeatEmailVerify
);

router.post("/login", validateBody(loginSchema), usersCtrl.login);

router.get("/current", authenticate, usersCtrl.getCurrent);

router.post("/logout", authenticate, usersCtrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), usersCtrl.updateAvatar);

export default router;