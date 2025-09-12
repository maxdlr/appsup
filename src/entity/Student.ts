import { Entity } from 'typeorm';
import { AbstractUser } from './AbstractUser';

@Entity()
export class Student extends AbstractUser {}
