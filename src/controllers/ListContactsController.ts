import { Request, Response } from "express";
import { ListContactsService } from "../services/ListContactsService";

class ListContactsController {
  async handle(request: Request, response: Response) {
    const service = new ListContactsService();

    const contacts = await service.execute();

    return response.json(contacts);
  }
}

export { ListContactsController };
