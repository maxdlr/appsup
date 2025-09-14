import { Lecture } from '@/entity/Lecture';
import {
  CrudServiceMethods,
  GetMethods,
  MutateMethods,
} from '@/types/crudTypes';
import createLecture from './crud/createLecture';
import getAllLectures from './crud/getAllLectures';
import getLecture from './crud/getLecture';
import updateLecture from './crud/updateLecture';
import { CreateRequest } from '@/utils/matchParams';
import softDeleteLecture from './crud/softDeleteLecture';

const mutateLectures = (): MutateMethods<Lecture> => {
  return {
    create: (lecture: CreateRequest<Lecture>) => createLecture(lecture),
    update: (criteria, lecture) => updateLecture(criteria, lecture),
    delete: (criteria) => softDeleteLecture(criteria),
  };
};

const queryLectures = (): GetMethods<Lecture> => {
  return {
    all: async (criteria?) => await getAllLectures(criteria),
    one: async (criteria) => getLecture(criteria),
  };
};

const LectureService: CrudServiceMethods<Lecture> = {
  ...queryLectures(),
  ...mutateLectures(),
};

export default LectureService;
