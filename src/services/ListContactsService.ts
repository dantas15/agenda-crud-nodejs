import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ContactsRepository } from "../repositories/ContactsRepository";

class ListContactsService {
  async execute() {
    const repository = getCustomRepository(ContactsRepository);

    try {
      const contacts = await repository.find();
      return instanceToPlain(contacts);
    } catch {
      throw new Error("Contact could not be found");
    }
  }
}

export { ListContactsService };
