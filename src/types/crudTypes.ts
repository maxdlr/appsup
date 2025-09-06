import { CreateRequest } from '@/utils/matchParams';
import { FindOptionsWhere, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface GetMethods<T> {
  all: (criteria?: FindOptionsWhere<T>) => Promise<T[]>;
  one: (criteria: FindOptionsWhere<T>) => Promise<T | null>;
}

export interface MutateMethods<T> {
  create: (entity: CreateRequest<T>) => Promise<T>;
  update: (
    criteria: FindOptionsWhere<T>,
    entity: QueryDeepPartialEntity<T>
  ) => Promise<UpdateResult>;
}

export type CrudServiceMethods<T> = MutateMethods<T> & GetMethods<T>;
