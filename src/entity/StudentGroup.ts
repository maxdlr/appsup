import { ChildEntity, JoinTable, ManyToMany } from 'typeorm';
import { Student } from './Student';
import { Group } from './parent/Group';

@ChildEntity()
export class StudentGroup extends Group {
  @ManyToMany(() => Student)
  @JoinTable()
  members!: Student[];
}
