import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto, userId: string) {
    const findContact = await this.contactsRepository.findByEmail(
      createContactDto.email,
    );

    if (findContact) {
      throw new ConflictException('Contact with this email already exists!');
    }

    const contact = await this.contactsRepository.create(
      createContactDto,
      userId,
    );

    return contact;
  }

  async findAll(id: string) {
    const contacts = await this.contactsRepository.findAll(id);

    return contacts;
  }

  async findOne(id: string, userId: string) {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    if (userId !== contact.userId) {
      throw new UnauthorizedException('User unauthorized!');
    }

    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto, userId: string) {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    if (userId !== contact.userId) {
      throw new UnauthorizedException('User unauthorized!');
    }
    const updatedContact = await this.contactsRepository.update(
      id,
      updateContactDto,
    );

    return updatedContact;
  }

  async remove(id: string, userId: string) {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    if (userId !== contact.userId) {
      throw new UnauthorizedException('User unauthorized!');
    }
    await this.contactsRepository.remove(id);

    return;
  }
}
