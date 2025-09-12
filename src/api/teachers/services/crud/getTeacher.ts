import { Teacher } from '@/entity/Teacher';
import { teacherRepository } from '@/repository/teacherRepository';
import { criteriaToString } from '@/utils/criteriaToString';
import { FindOptionsWhere } from 'typeorm';

const getTeacher = async (criteria: FindOptionsWhere<Teacher>) => {
  if (!criteria) {
    throw CrudError(500, 'Criteria needed to get a teacher');
  }

  const teacher = await teacherRepository.findOneBy(criteria);

  if (!teacher) {
    throw CrudError(
      404,
      'Teacher not found with criteria: ' + criteriaToString(criteria)
    );
  }

  return teacher;
};

export default getTeacher;
