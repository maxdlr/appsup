import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  TableInheritance,
} from 'typeorm';
import { UserCalendar } from '../UserCalendar';
import { AbstractEntity } from '../abstract/AbstractEntity';
import { Participation } from '../Participation';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class User extends AbstractEntity {
  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @OneToOne(() => UserCalendar, (calendar) => calendar.user)
  @JoinColumn()
  calendar!: UserCalendar;

  @OneToMany(() => Participation, (participation) => participation.event)
  participations!: Participation[];

  public static CreateRequestKeys: string[] = ['firstname', 'lastname'];
  public static GetRequestKeys: string[] = ['id'];
  public static DeleteRequestKeys: string[] = ['id'];
}
