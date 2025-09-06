import { User } from '@/entity/User';
import { userRepository } from '@/repository/userRepository';
import { FindOptionsWhere } from 'typeorm';

const getOneUser = async (criteria: FindOptionsWhere<User>) => {
  if (!criteria) {
    throw CrudError(500, 'Criteria needed to get a user');
  }

  const user = await userRepository.findOneBy(criteria);

  if (!user) {
    throw CrudError(
      404,
      'User not found with criteria: ' + criteriaToString(criteria)
    );
  }

  return user;
};

export function criteriaToString<T>(criteria: FindOptionsWhere<T>): string {
  return Object.entries(criteria)
    .reduce((acc: string[], entry: [string, unknown]) => {
      const key = entry[0];
      const value = entry[1];
      acc.push(`${key}: ${value}`);

      return acc;
    }, [])
    .toString();
}

export default getOneUser;
