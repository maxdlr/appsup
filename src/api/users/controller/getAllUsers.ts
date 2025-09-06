import { User } from '@/entity/User';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import UserService from '../services/UserService';

const getAllUsers = async ({ query }: Request, res: Response) => {
  const getUserRequest = validateRequest<GetRequest<User>>(query, 'User');
  const user = await UserService.all(getUserRequest);
  return res.send(user);
};

export default getAllUsers;
