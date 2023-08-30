import express from "express";
const router = express.Router();

import contactsCtrl from "../../controllers/contacts.js";

import validateBody from "../../middlewares/validateBody.js";

import addSchema from "../../schemas/contacts.js";

router.get("/", contactsCtrl.getAll);

router.get("/:id", contactsCtrl.getById);

router.post("/", validateBody(addSchema), contactsCtrl.addContact);

router.delete("/:id", contactsCtrl.removeById);

router.put("/:id", validateBody(addSchema), contactsCtrl.updateById);

export default router;
 