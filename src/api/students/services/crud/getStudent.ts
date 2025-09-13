import { Student } from '@/entity/Student';
import { StudentRepository } from '@/repository/StudentRepository';
import { criteriaToString } from '@/utils/criteriaToString';
import { FindOptionsWhere } from 'typeorm';

const getStudent = async (criteria: FindOptionsWhere<Student>) => {
  if (!criteria) {
    throw CrudError(500, 'Criteria needed to get a student');
  }

  const student = await StudentRepository.findOneBy(criteria);

  if (!student) {
    throw CrudError(
      404,
      'Student not found with criteria: ' + criteriaToString(criteria)
    );
  }

  return student;
};

export default getStudent;
