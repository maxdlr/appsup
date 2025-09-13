import { Entity, ManyToOne } from 'typeorm';
import { AbstractEvent } from './abstract/AbstractEvent';
import { Teacher } from './Teacher';

@Entity()
export class Lecture extends AbstractEvent {
  @ManyToOne(() => Teacher, (teacher) => teacher.lectures)
  author!: Teacher;
}
