import { Teacher } from '@/entity/Teacher';
import {
  CrudServiceMethods,
  GetMethods,
  MutateMethods,
} from '@/types/crudTypes';
import createTeacher from './crud/createTeacher';
import getAllTeachers from './crud/getAllTeachers';
import getTeacher from './crud/getTeacher';
import updateTeacher from './crud/updateTeacher';
import { CreateRequest } from '@/utils/matchParams';
import softDeleteTeacher from './crud/softDeleteTeacher';

const mutateTeachers = (): MutateMethods<Teacher> => {
  return {
    create: (teacher: CreateRequest<Teacher>) => createTeacher(teacher),
    update: (criteria, teacher) => updateTeacher(criteria, teacher),
    delete: (criteria) => softDeleteTeacher(criteria),
  };
};

const queryTeachers = (): GetMethods<Teacher> => {
  return {
    all: async (criteria?) => await getAllTeachers(criteria),
    one: async (criteria) => getTeacher(criteria),
  };
};

const TeacherService: CrudServiceMethods<Teacher> = {
  ...queryTeachers(),
  ...mutateTeachers(),
};

export default TeacherService;
