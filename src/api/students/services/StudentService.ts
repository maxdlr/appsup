import { Student } from '@/entity/Student';
import {
  CrudServiceMethods,
  GetMethods,
  MutateMethods,
} from '@/types/crudTypes';
import createStudent from './crud/createStudent';
import getAllStudents from './crud/getAllStudents';
import getStudent from './crud/getStudent';
import updateStudent from './crud/updateStudent';
import { CreateRequest } from '@/utils/matchParams';
import softDeleteStudent from './crud/softDeleteStudent';

const mutateStudents = (): MutateMethods<Student> => {
  return {
    create: (student: CreateRequest<Student>) => createStudent(student),
    update: (criteria, student) => updateStudent(criteria, student),
    delete: (criteria) => softDeleteStudent(criteria),
  };
};

const queryStudents = (): GetMethods<Student> => {
  return {
    all: async (criteria?) => await getAllStudents(criteria),
    one: async (criteria) => getStudent(criteria),
  };
};

const StudentService: CrudServiceMethods<Student> = {
  ...queryStudents(),
  ...mutateStudents(),
};

export default StudentService;
