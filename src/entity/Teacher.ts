import { Column, Entity } from 'typeorm';
import { Student } from './Student';

@Entity()
export class Teacher extends Student {
  @Column()
  status!: 'active' | 'inactive';
}
