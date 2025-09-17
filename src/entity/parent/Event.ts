import { Column, Entity, OneToMany, TableInheritance } from 'typeorm';
import { Participation } from '../Participation';
import { AbstractEntity } from '../abstract/AbstractEntity';

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

  @OneToMany(() => Participation, (participation) => participation.event)
  participations!: Participation[];

  static CreateRequestKeys: string[] = ['name', 'startDate', 'endDate'];
  static GetRequestKeys: string[] = ['id'];
  static DeleteRequestKeys: string[] = ['id'];
}

export enum EVENT_TYPE {
  COURSE = 'course',
  MEETING = 'meeting',
}
