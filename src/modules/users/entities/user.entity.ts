import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phone: string;

  @Exclude()
  password: string;

  readonly createdAt: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = User.createDate();
  }

  static createDate(): string {
    const date = Date.now();
    const now = new Date(date);
    return now.toDateString();
  }
}
