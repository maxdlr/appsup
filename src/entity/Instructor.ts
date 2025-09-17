import { ChildEntity, Column, OneToMany } from 'typeorm';
import { User } from './parent/User';
import { Lecture } from './Lecture';

@ChildEntity()
export class Instructor extends User {
  @Column()
  status: 'active' | 'inactive' = 'inactive';

  @OneToMany(() => Lecture, (lecture) => lecture.author)
  lectures!: Lecture[];
}
