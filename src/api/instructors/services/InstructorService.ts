import { Instructor } from '@/entity/Instructor';
import {
  CrudServiceMethods,
  GetMethods,
  MutateMethods,
} from '@/types/crudTypes';
import createInstructor from './crud/createInstructor';
import getAllInstructors from './crud/getAllInstructors';
import getInstructor from './crud/getInstructor';
import updateInstructor from './crud/updateInstructor';
import { CreateRequest } from '@/utils/matchParams';
import softDeleteInstructor from './crud/softDeleteInstructor';

const mutateInstructors = (): MutateMethods<Instructor> => {
  return {
    create: (instructor: CreateRequest<Instructor>) => createInstructor(instructor),
    update: (criteria, instructor) => updateInstructor(criteria, instructor),
    delete: (criteria) => softDeleteInstructor(criteria),
  };
};

const queryInstructors = (): GetMethods<Instructor> => {
  return {
    all: async (criteria?) => await getAllInstructors(criteria),
    one: async (criteria) => getInstructor(criteria),
  };
};

const InstructorService: CrudServiceMethods<Instructor> = {
  ...queryInstructors(),
  ...mutateInstructors(),
};

export default InstructorService;
