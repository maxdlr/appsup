import { Column, Entity, TableInheritance } from 'typeorm';
import { AbstractEntity } from '../abstract/AbstractEntity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export abstract class Group extends AbstractEntity {
  @Column()
  name!: string;

  @Column({ default: '' })
  description!: string;

  public static CreateRequestKeys: string[] = ['name', 'description'];
  public static GetRequestKeys: string[] = ['id'];
  public static DeleteRequestKeys: string[] = ['id'];
}
