import express from "express";

import contactsCtrl from "../../controllers/contacts.js";

import validateBody from "../../middlewares/validateBody.js";
import isValideId from "../../middlewares/isValidId.js";

import addSchema, { updateFavoriteSchema } from "../../models/contact.js";

const router = express.Router();

router.get("/", contactsCtrl.getAll);

router.get("/:id", isValideId, contactsCtrl.getById);

router.post("/", validateBody(addSchema), contactsCtrl.addContact);

router.put(
  "/:id",
  isValideId,
  validateBody(updateFavoriteSchema),
  contactsCtrl.updateById
);

router.patch(
  "/:id/favorite",
  isValideId,
  validateBody(updateFavoriteSchema),
  contactsCtrl.updateFavorite
);

router.delete("/:id", isValideId, contactsCtrl.removeById);


export default router;
 