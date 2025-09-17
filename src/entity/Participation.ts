import { Entity, ManyToOne } from 'typeorm';
import { Event } from './parent/Event';
import { AbstractEntity } from './abstract/AbstractEntity';
import { User } from './parent/User';

@Entity()
export class Participation extends AbstractEntity {
  @ManyToOne(() => Event, (event: Event) => event.participations)
  event!: Event;

  @ManyToOne(() => User, (user: User) => user.participations)
  user!: User;

  public static CreateRequestKeys: string[] = ['event', 'user'];
  public static GetRequestKeys: string[] = ['id'];
  public static DeleteRequestKeys: string[] = ['id'];
}
