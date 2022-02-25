import path from "path";
import fs from "fs";
import { getCustomRepository } from "typeorm";
import uploadConfig from "../config/upload";
import { ContactsRepository } from "../repositories/ContactsRepository";

interface IAvatarRequest {
  id: string;
  requestAvatar: Express.Multer.File;
}

class UpdateContactAvatarService {
  async execute({ id, requestAvatar }: IAvatarRequest) {
    const repository = getCustomRepository(ContactsRepository);

    const contact = await repository.findOne({ id });

    if (!contact) {
      throw new Error("Contact not found");
    }

    if (contact.image) {
      const contactAvatarFilePath = path.join(
        uploadConfig.directory,
        contact.image
      );
      const contactAvatarFileExists = await fs.promises.stat(
        contactAvatarFilePath
      );

      if (contactAvatarFileExists) {
        await fs.promises.unlink(contactAvatarFilePath);
      }
    }

    contact.image = requestAvatar.filename;

    const updatedAvatar = await repository.save(contact);

    return updatedAvatar;
  }
}

export { UpdateContactAvatarService };
