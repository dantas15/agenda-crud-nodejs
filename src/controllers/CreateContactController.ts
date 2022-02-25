import { Request, Response } from "express";
import { CreateContactService } from "../services/CreateContactService";

class CreateContactController {
  async handle(request: Request, response: Response) {
    const service = new CreateContactService();

    const { name, email, phoneNumber } = request.body;

    const contact = await service.execute({ name, email, phoneNumber });

    return response.json(contact);
  }
}

export { CreateContactController };
