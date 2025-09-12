import { Teacher } from '@/entity/Teacher';
import { teacherRepository } from '@/repository/teacherRepository';
import { FindOptionsWhere, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

const updateTeacher = async (
  criteria: FindOptionsWhere<Teacher>,
  partialTeacher: QueryDeepPartialEntity<Teacher>
): Promise<UpdateResult> => {
  return await teacherRepository.update(criteria, partialTeacher);
};

export default updateTeacher;
