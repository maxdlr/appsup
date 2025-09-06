import { User } from '@/entity/User';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'root',
  database: process.env.APP_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
