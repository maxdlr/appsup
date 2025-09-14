import { Column } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';

export abstract class AbstractEvent extends AbstractEntity {
  @Column()
  name!: string;

  @Column({ default: '' })
  description!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;

  public static CreateRequestKeys: string[] = ['name', 'startDate', 'endDate'];
  public static GetRequestKeys: string[] = ['id'];
  public static DeleteRequestKeys: string[] = ['id'];
}
