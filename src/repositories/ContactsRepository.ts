import { EntityRepository, Repository } from "typeorm";
import { Contact } from "../entities/Contact";

@EntityRepository(Contact)
class ContactsRepository extends Repository<Contact> {}

export { ContactsRepository };
