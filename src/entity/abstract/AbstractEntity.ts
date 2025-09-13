import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export interface CrudKeys {
  CreateRequestKeys: string[];
  GetRequestKeys: string[];
  DeleteRequestKeys: string[];
}

export abstract class AbstractEntity implements CrudKeys {
  @PrimaryGeneratedColumn()
  id!: number;

  @DeleteDateColumn()
  deletedAt?: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  CreateRequestKeys!: string[];
  GetRequestKeys!: string[];
  DeleteRequestKeys!: string[];
}
