import { ChildEntity } from 'typeorm';
import { User } from './parent/User';

@ChildEntity()
export class Student extends User {}
