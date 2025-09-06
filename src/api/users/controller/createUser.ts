import { User, UserCreateRequestKeys } from '@/entity/User';
import { CreateRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import UserService from '../services/UserService';

const createUser = async ({ body }: Request, res: Response) => {
  const createUserRequest = validateRequest<CreateRequest<User>>(
    body,
    'User',
    UserCreateRequestKeys
  );

  const user = new User();
  user.firstname = createUserRequest.firstname;
  user.lastname = createUserRequest.lastname;

  const created = await UserService.create(user);
  return res.send(created);
};

export default createUser;
