import { studentRepository } from '@/repository/studentRepository';
import { DeleteRequest } from '@/utils/matchParams';
import { UpdateResult } from 'typeorm';

const softDeleteStudent = async (
  student: DeleteRequest
): Promise<UpdateResult> => {
  return await studentRepository.softDelete(student);
};

export default softDeleteStudent;
