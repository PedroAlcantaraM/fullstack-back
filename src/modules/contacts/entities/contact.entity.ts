import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  userId: string;
  readonly createdAt: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = Contact.createDate();
  }

  static createDate(): string {
    const date = Date.now();
    const now = new Date(date);
    return now.toDateString();
  }
}
