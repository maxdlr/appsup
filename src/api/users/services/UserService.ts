import { User } from '@/entity/User';
import {
  CrudServiceMethods,
  GetMethods,
  MutateMethods,
} from '@/types/crudTypes';
import createOneUser from './crud/createUser';
import getAllUsers from './crud/getAllUsers';
import getOneUser from './crud/getOneUser';
import updateUser from './crud/updateUser';
import { CreateRequest } from '@/utils/matchParams';

const mutateUsers = (): MutateMethods<User> => {
  return {
    create: (user: CreateRequest<User>) => createOneUser(user),
    update: (criteria, user) => updateUser(criteria, user),
  };
};

const queryUsers = (): GetMethods<User> => {
  return {
    all: async (criteria?) => await getAllUsers(criteria),
    one: async (criteria) => getOneUser(criteria),
  };
};

const UserService: CrudServiceMethods<User> = {
  ...queryUsers(),
  ...mutateUsers(),
};

export default UserService;
