import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ContactsRepository } from "../repositories/ContactsRepository";

interface IContactRequest {
  name: string;
  email: string;
  phoneNumber: string;
}

class CreateContactService {
  async execute({ name, email, phoneNumber }: IContactRequest) {
    const repository = getCustomRepository(ContactsRepository);

    console.log("oi");

    const emailAlreadyExists = await repository.findOne({ email });

    if (emailAlreadyExists) {
      throw new Error("Email is already in use!");
    }

    const phoneNumberAlreadyExists = await repository.findOne({ phoneNumber });

    if (phoneNumberAlreadyExists) {
      throw new Error("Phone number is already in use!");
    }

    try {
      const contactObject = repository.create({ name, email, phoneNumber });

      const contact = await repository.save(contactObject);

      return instanceToPlain(contact);
    } catch {
      throw new Error("Contact could not be created");
    }
  }
}

export { CreateContactService };
