import { User } from '@/entity/User';
import { userRepository } from '@/repository/userRepository';
import { CreateRequest } from '@/utils/matchParams';

const createOneUser = async (user: CreateRequest<User>): Promise<User> => {
  return await userRepository.save(user);
};

export default createOneUser;
