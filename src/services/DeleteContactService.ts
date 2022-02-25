import { getCustomRepository } from "typeorm";
import { ContactsRepository } from "../repositories/ContactsRepository";

interface IDeleteContact {
  id: string;
}

class DeleteContactService {
  async execute({ id }: IDeleteContact) {
    const repository = getCustomRepository(ContactsRepository);

    try {
      const contact = await repository.findOne({ id });

      if (!contact) {
        throw new Error("Contact not found");
      }

      await repository.remove(contact);
      return { message: `Contact ${contact.name} removed` };
    } catch {
      throw new Error("Contact could not be removed");
    }
  }
}

export { DeleteContactService };
