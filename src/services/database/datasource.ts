import { Student } from '@/entity/Student';
import { Teacher } from '@/entity/Teacher';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const Entities = [Student, Teacher];

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'root',
  database: process.env.APP_NAME,
  synchronize: true,
  logging: false,
  entities: Entities,
  migrations: [],
  subscribers: [],
});
