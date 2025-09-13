import { Student } from '@/entity/Student';
import { StudentRepository } from '@/repository/StudentRepository';
import { CreateRequest } from '@/utils/matchParams';

const createStudent = async (
  student: CreateRequest<Student>
): Promise<Student> => {
  return await StudentRepository.save(student);
};

export default createStudent;
