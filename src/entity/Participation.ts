import { ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract/AbstractEntity';
import { Event } from './abstract/Event';

export class Participation extends AbstractEntity {
  @ManyToOne(() => Event, (event: Event) => event.participations)
  event!: Event;
}
