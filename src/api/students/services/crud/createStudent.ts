import { Student } from '@/entity/Student';
import { studentRepository } from '@/repository/studentRepository';
import { CreateRequest } from '@/utils/matchParams';

const createStudent = async (
  student: CreateRequest<Student>
): Promise<Student> => {
  return await studentRepository.save(student);
};

export default createStudent;
