import { Entities } from '@/services/database/datasource';
import { getMetadataArgsStorage } from 'typeorm';

type RequestObject<T> = Partial<Record<keyof T, any>>;

export type GetRequest<T> = RequestObject<T>;
export type CreateRequest<T> = Omit<RequestObject<T>, 'id'>;
export type UpdateRequest<T> = RequestObject<T>;
export type DeleteRequest = { id: number };

const getEntityClassNames = () => Entities.map((e) => e.name);

export function validateRequest<T>(
  obj: any,
  className: string,
  mandatoryKeys?: string[]
): T {
  if (!getEntityClassNames().includes(className)) {
    throw new Error('Wrong entity class name to validate');
  }
  if (
    typeof obj !== 'object' ||
    obj === null ||
    Object.keys(obj).length === 0
  ) {
    return {} as T;
  }

  const objKeys = Object.keys(obj);
  const allowedKeys = getEntityKeys(className);

  let errors: string[] = [];
  const valid = objKeys.every((key: string) => {
    const isKeyValid = allowedKeys.includes(key as never);
    if (!isKeyValid) errors.push(key);
    return isKeyValid;
  });

  if (
    mandatoryKeys &&
    !mandatoryKeys?.every((mKey: string) => objKeys.includes(mKey))
  ) {
    throw ApiError(
      400,
      `Bad Request : Missing properties: "${mandatoryKeys.filter((mKey) => !objKeys.includes(mKey)).join(', ')}".`
    );
  }

  if (!valid) {
    throw ApiError(
      400,
      `Bad Request : Forbidden keys given: "${errors.join(', ')}". Allowed keys are "${allowedKeys.join(', ')}".`
    );
  }

  return obj as T;
}

function getEntityKeys<T>(className: string): (keyof T)[] {
  const columns = getMetadataArgsStorage()
    .columns.filter((col) => col.target.toString().includes(className))
    .map((col) => col.propertyName);

  const abstractColumns = getMetadataArgsStorage()
    .columns.filter((col) => col.target.toString().includes('AbstractEntity'))
    .map((col) => col.propertyName);

  return [...columns, ...abstractColumns] as (keyof T)[];
}
