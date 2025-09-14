import { instructorRepository } from '@/repository/instructorRepository';
import { DeleteRequest } from '@/utils/matchParams';
import { UpdateResult } from 'typeorm';

const softDeleteInstructor = async (
  instructor: DeleteRequest
): Promise<UpdateResult> => {
  return await instructorRepository.softDelete(instructor);
};

export default softDeleteInstructor;
