import { StudentRepository } from '@/repository/StudentRepository';
import { DeleteRequest } from '@/utils/matchParams';
import { UpdateResult } from 'typeorm';

const softDeleteStudent = async (
  student: DeleteRequest
): Promise<UpdateResult> => {
  return await StudentRepository.softDelete(student);
};

export default softDeleteStudent;
