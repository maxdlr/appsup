import { Lecture } from '@/entity/Lecture';
import { LectureRepository } from '@/repository/LectureRepository';
import { FindOptionsWhere, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const updateLecture = async (
  criteria: FindOptionsWhere<Lecture>,
  partialLecture: QueryDeepPartialEntity<Lecture>
): Promise<UpdateResult> => {
  return await LectureRepository.update(criteria, partialLecture);
};

export default updateLecture;
