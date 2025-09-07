import { teacherRepository } from '@/repository/teacherRepository';
import { DeleteRequest } from '@/utils/matchParams';
import { UpdateResult } from 'typeorm';

const softDeleteTeacher = async (
  teacher: DeleteRequest
): Promise<UpdateResult> => {
  return await teacherRepository.softDelete(teacher);
};

export default softDeleteTeacher;
