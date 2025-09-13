import { Student } from '@/entity/Student';
import { StudentRepository } from '@/repository/StudentRepository';
import { FindOptionsWhere, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const updateStudent = async (
  criteria: FindOptionsWhere<Student>,
  partialStudent: QueryDeepPartialEntity<Student>
): Promise<UpdateResult> => {
  return await StudentRepository.update(criteria, partialStudent);
};

export default updateStudent;
