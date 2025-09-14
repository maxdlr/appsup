import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { AbstractGroup } from './abstract/AbstractGroup';
import { Student } from './Student';

@Entity()
export class StudentGroup extends AbstractGroup {
  @ManyToMany(() => Student)
  @JoinTable()
  members!: Student[];
}
