import { Request, Response } from "express";
import { UpdateContactAvatarService } from "../services/UpdateContactAvatarService";

class UpdateContactAvatarController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const requestAvatar = req.file;

    const service = new UpdateContactAvatarService();
    const user = service.execute({ id, requestAvatar });

    return res.json(user);
  }
}

export { UpdateContactAvatarController };
