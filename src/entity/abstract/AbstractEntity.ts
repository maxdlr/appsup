import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// export interface CrudKeys {
//   CreateRequestKeys: string[];
//   GetRequestKeys: string[];
//   DeleteRequestKeys: string[];
// }

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @DeleteDateColumn()
  deletedAt?: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  protected static CreateRequestKeys: string[];
  protected static GetRequestKeys: string[];
  protected static DeleteRequestKeys: string[];
}
