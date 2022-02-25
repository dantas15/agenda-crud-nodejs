import { Request, Response } from "express";
import { EditContactService } from "../services/EditContactService";

class EditContactController {
  async handle(request: Request, response: Response) {
    const service = new EditContactService();

    const { id, name, email, phoneNumber } = request.body;

    const contact = await service.execute({ id, name, email, phoneNumber });

    return response.json(contact);
  }
}

export { EditContactController };
