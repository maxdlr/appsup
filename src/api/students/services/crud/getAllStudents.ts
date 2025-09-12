import { Student } from '@/entity/Student';
import { studentRepository } from '@/repository/studentRepository';
import { FindOptionsWhere } from 'typeorm';

const getAllStudents = async (criteria?: FindOptionsWhere<Student>) => {
  if (!criteria) {
    return await studentRepository.find();
  }
  return await studentRepository.findBy(criteria);
};

export default getAllStudents;
