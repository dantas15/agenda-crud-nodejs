import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ContactsRepository } from "../repositories/ContactsRepository";

interface IContactRequest {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

class EditContactService {
  async execute({ id, name, email, phoneNumber }: IContactRequest) {
    const repository = getCustomRepository(ContactsRepository);

    const contact = await repository.findOne({ id });

    if (!contact) {
      throw new Error("Contact not found");
    }

    const emailAlreadyExists = await repository.findOne({
      email,
    });

    if (emailAlreadyExists && emailAlreadyExists.email !== contact.email) {
      throw new Error("Email is already in use!");
    }

    const phoneAlreadyExists = await repository.findOne({
      phoneNumber,
    });

    if (
      phoneAlreadyExists &&
      phoneAlreadyExists.phoneNumber !== contact.phoneNumber
    ) {
      throw new Error("Phone number is already in use!");
    }

    try {
      const contactUpdated = await repository.save({
        id,
        name,
        email,
        phoneNumber,
      });

      return instanceToPlain(contactUpdated);
    } catch {
      throw new Error("Contact could not be edited");
    }
  }
}

export { EditContactService };
