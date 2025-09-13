import { Column } from 'typeorm';
import { AbstractEntity } from './AbstractEntity';

export abstract class AbstractUser extends AbstractEntity {
  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  public static CreateRequestKeys: string[] = ['firstname', 'lastname'];
  public static GetRequestKeys: string[] = ['id'];
  public static DeleteRequestKeys: string[] = ['id'];
}
