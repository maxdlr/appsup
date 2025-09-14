import { Instructor } from '@/entity/Instructor';
import { instructorRepository } from '@/repository/instructorRepository';
import { FindOptionsWhere } from 'typeorm';

const getAllInstructors = async (criteria?: FindOptionsWhere<Instructor>) => {
  if (!criteria) {
    return await instructorRepository.find();
  }
  return await instructorRepository.findBy(criteria);
};

export default getAllInstructors;
