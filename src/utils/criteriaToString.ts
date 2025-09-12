import { FindOptionsWhere } from 'typeorm';

export function criteriaToString<T>(criteria: FindOptionsWhere<T>): string {
  return Object.entries(criteria)
    .reduce((acc: string[], entry: [string, unknown]) => {
      const key = entry[0];
      const value = entry[1];
      acc.push(`${key}: ${value}`);

      return acc;
    }, [])
    .join(', ');
}
