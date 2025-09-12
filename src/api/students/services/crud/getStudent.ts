import { Student } from '@/entity/Student';
import { studentRepository } from '@/repository/studentRepository';
import { criteriaToString } from '@/utils/criteriaToString';
import { FindOptionsWhere } from 'typeorm';

const getStudent = async (criteria: FindOptionsWhere<Student>) => {
  if (!criteria) {
    throw CrudError(500, 'Criteria needed to get a student');
  }

  const student = await studentRepository.findOneBy(criteria);

  if (!student) {
    throw CrudError(
      404,
      'Student not found with criteria: ' + criteriaToString(criteria)
    );
  }

  return student;
};

export default getStudent;
