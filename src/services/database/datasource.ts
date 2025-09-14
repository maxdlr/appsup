import { Lecture } from '@/entity/Lecture';
import { Student } from '@/entity/Student';
import { Instructor } from '@/entity/Instructor';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { StudentGroup } from '@/entity/StudentGroup';
import { Participation } from '@/entity/Participation';
import { Event } from '@/entity/abstract/Event';

export const Entities = [
  Student,
  Instructor,
  StudentGroup,
  Participation,
  Event,
];

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
