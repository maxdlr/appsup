import { Column, Entity, OneToMany, TableInheritance } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';
import { Participation } from '../Participation';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Event extends AbstractEntity {
  @Column()
  name!: string;

  @Column({ default: '' })
  description!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;

  @Column()
  type!: EVENT_TYPE;

  @OneToMany(() => Participation, (participation) => participation.event)
  participations!: Participation[];

  public static CreateRequestKeys: string[] = ['name', 'startDate', 'endDate'];
  public static GetRequestKeys: string[] = ['id'];
  public static DeleteRequestKeys: string[] = ['id'];
}

export enum EVENT_TYPE {
  COURSE = 'course',
  MEETING = 'meeting',
}
