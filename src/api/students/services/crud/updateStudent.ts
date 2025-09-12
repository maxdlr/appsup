import { Student } from '@/entity/Student';
import { studentRepository } from '@/repository/studentRepository';
import { FindOptionsWhere, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const updateStudent = async (
  criteria: FindOptionsWhere<Student>,
  partialStudent: QueryDeepPartialEntity<Student>
): Promise<UpdateResult> => {
  return await studentRepository.update(criteria, partialStudent);
};

export default updateStudent;
