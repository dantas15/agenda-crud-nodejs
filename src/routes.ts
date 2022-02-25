import { Router, Request, Response } from "express";
import { CreateContactController } from "./controllers/CreateContactController";
import { ListContactsController } from "./controllers/ListContactsController";
import { DeleteContactController } from "./controllers/DeleteContactController";
import { EditContactController } from "./controllers/EditContactController";

import multer from "multer";
import uploadConfig from "./config/upload";
import { UpdateContactAvatarController } from "./controllers/UpdateContactAvatarController";
const upload = multer(uploadConfig);

const router = Router();

router.get("/", (request: Request, response: Response) => {
  response.json({ message: "Hello World" });
});

router.get("/contacts", new ListContactsController().handle);
router.post("/contact", new CreateContactController().handle);
router.put("/contact", new EditContactController().handle);
router.delete("/contact/:id", new DeleteContactController().handle);
router.patch(
  "/contact/avatar/:id",
  upload.single("avatar"),
  new UpdateContactAvatarController().handle
);

export { router };
