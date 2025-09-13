import { Entity } from 'typeorm';
import { AbstractUser } from './abstract/AbstractUser';

@Entity()
export class Student extends AbstractUser {}
