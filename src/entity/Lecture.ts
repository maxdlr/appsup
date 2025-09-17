import { ChildEntity, ManyToOne } from 'typeorm';
import { Event } from './parent/Event';
import { Instructor } from './Instructor';

@ChildEntity()
export class Lecture extends Event {
  @ManyToOne(() => Instructor, (instructor) => instructor.lectures)
  author!: Instructor;
}
