import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entity';

export abstract class ContactsRepository {
  abstract create(
    data: CreateContactDto,
    userId: string,
  ): Promise<Contact> | Contact;
  abstract findAll(id: string): Promise<Contact[]> | Contact[];
  abstract findOne(id: string): Promise<Contact | undefined> | Contact;
  abstract findByEmail(email: string): Promise<Contact | undefined> | Contact;
  abstract update(
    id: string,
    data: UpdateContactDto,
  ): Promise<Contact | undefined> | Contact;
  abstract remove(id: string): Promise<void> | void;
}
