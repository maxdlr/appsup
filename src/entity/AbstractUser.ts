import { Column } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';

export abstract class AbstractUser extends AbstractEntity {
  @Column()
  firstname!: string;

  @Column()
  lastname!: string;
}

export const UserCreateRequestKeys = ['firstname', 'lastname'];
export const UserGetRequestKeys = ['id'];
export const UserDeleteRequestKeys = ['id'];
