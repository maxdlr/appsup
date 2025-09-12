import { Teacher } from '@/entity/Teacher';
import { teacherRepository } from '@/repository/teacherRepository';
import { FindOptionsWhere } from 'typeorm';

const getAllTeachers = async (criteria?: FindOptionsWhere<Teacher>) => {
  if (!criteria) {
    return await teacherRepository.find();
  }
  return await teacherRepository.findBy(criteria);
};

export default getAllTeachers;
