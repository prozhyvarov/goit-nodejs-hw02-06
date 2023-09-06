import express from "express";

import contactsCtrl from "../../controllers/contacts.js";

import validateBody from "../../middlewares/validateBody.js";
import isValideId from "../../middlewares/isValidId.js";

import addSchema, { updateFavoriteSchema } from "../../models/contact.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.get("/", authenticate, contactsCtrl.getAll);

router.get("/:id", authenticate, isValideId, contactsCtrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(addSchema),
  contactsCtrl.addContact
);

router.put(
  "/:id",
  authenticate,
  isValideId,
  validateBody(updateFavoriteSchema),
  contactsCtrl.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValideId,
  validateBody(updateFavoriteSchema),
  contactsCtrl.updateFavorite
);

router.delete("/:id", authenticate, isValideId, contactsCtrl.removeById);


export default router;
 