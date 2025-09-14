import { Instructor } from '@/entity/Instructor';
import { instructorRepository } from '@/repository/instructorRepository';
import { CreateRequest } from '@/utils/matchParams';

const createInstructor = async (
  instructor: CreateRequest<Instructor>
): Promise<Instructor> => {
  return await instructorRepository.save(instructor);
};

export default createInstructor;
