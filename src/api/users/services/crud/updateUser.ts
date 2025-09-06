import { User } from '@/entity/User';
import { userRepository } from '@/repository/userRepository';
import { FindOptionsWhere, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const updateUser = async (
  criteria: FindOptionsWhere<User>,
  user: QueryDeepPartialEntity<User>
): Promise<UpdateResult> => {
  return await userRepository.update(criteria, user);
};

export default updateUser;
