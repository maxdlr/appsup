import { ChildEntity, ManyToOne } from 'typeorm';
import { Event } from './abstract/Event';
import { Instructor } from './Instructor';

@ChildEntity()
export class Lecture extends Event {
  @ManyToOne(() => Instructor, (instructor) => instructor.lectures)
  author!: Instructor;
}
