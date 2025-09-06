import { User } from '@/entity/User';
import { userRepository } from '@/repository/userRepository';
import { FindOptionsWhere } from 'typeorm';

const getAllUsers = async (criteria?: FindOptionsWhere<User>) => {
  if (!criteria) {
    return await userRepository.find();
  }
  return await userRepository.findBy(criteria);
};

export default getAllUsers;
