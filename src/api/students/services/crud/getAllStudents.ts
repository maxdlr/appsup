import { Student } from '@/entity/Student';
import { StudentRepository } from '@/repository/StudentRepository';
import { FindOptionsWhere } from 'typeorm';

const getAllStudents = async (criteria?: FindOptionsWhere<Student>) => {
  if (!criteria) {
    return await StudentRepository.find();
  }
  return await StudentRepository.findBy(criteria);
};

export default getAllStudents;
