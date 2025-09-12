import { Teacher } from '@/entity/Teacher';
import { teacherRepository } from '@/repository/teacherRepository';
import { CreateRequest } from '@/utils/matchParams';

const createTeacher = async (
  teacher: CreateRequest<Teacher>
): Promise<Teacher> => {
  return await teacherRepository.save(teacher);
};

export default createTeacher;
