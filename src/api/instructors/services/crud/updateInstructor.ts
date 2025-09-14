import { Instructor } from '@/entity/Instructor';
import { instructorRepository } from '@/repository/instructorRepository';
import { FindOptionsWhere, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const updateInstructor = async (
  criteria: FindOptionsWhere<Instructor>,
  partialInstructor: QueryDeepPartialEntity<Instructor>
): Promise<UpdateResult> => {
  return await instructorRepository.update(criteria, partialInstructor);
};

export default updateInstructor;
