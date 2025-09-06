import { User, UserGetRequestKeys } from '@/entity/User';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import UserService from '../services/UserService';

const getUser = async ({ query }: Request, res: Response) => {
  const getUserRequest = validateRequest<GetRequest<User>>(
    query,
    'User',
    UserGetRequestKeys
  );
  const user = await UserService.one(getUserRequest);
  return res.send(user);
};

export default getUser;
