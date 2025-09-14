import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractUser } from './abstract/AbstractUser';
import { Lecture } from './Lecture';

@Entity()
export class Instructor extends AbstractUser {
  @Column()
  status: 'active' | 'inactive' = 'inactive';

  @OneToMany(() => Lecture, (lecture) => lecture.author)
  lectures!: Lecture[];
}
