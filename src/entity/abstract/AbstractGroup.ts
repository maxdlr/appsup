import { Column } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';

export abstract class AbstractGroup extends AbstractEntity {
  @Column()
  name!: string;

  @Column({ default: '' })
  description!: string;

  public static CreateRequestKeys: string[] = ['name', 'description'];
  public static GetRequestKeys: string[] = ['id'];
  public static DeleteRequestKeys: string[] = ['id'];
}
