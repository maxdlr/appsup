import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;
}

export const UserCreateRequestKeys = ['firstname', 'lastname'];
export const UserGetRequestKeys = ['id'];
