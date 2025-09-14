import { Instructor } from '@/entity/Instructor';
import { instructorRepository } from '@/repository/instructorRepository';
import { criteriaToString } from '@/utils/criteriaToString';
import { FindOptionsWhere } from 'typeorm';

const getInstructor = async (criteria: FindOptionsWhere<Instructor>) => {
  if (!criteria) {
    throw CrudError(500, 'Criteria needed to get a instructor');
  }

  const instructor = await instructorRepository.findOneBy(criteria);

  if (!instructor) {
    throw CrudError(
      404,
      'Instructor not found with criteria: ' + criteriaToString(criteria)
    );
  }

  return instructor;
};

export default getInstructor;
