import { Request, Response } from "express";
import { DeleteContactService } from "../services/DeleteContactService";

class DeleteContactController {
  async handle(request: Request, response: Response) {
    const service = new DeleteContactService();

    const { id } = request.params;

    const contact = await service.execute({ id });

    return response.json(contact);
  }
}

export { DeleteContactController };
