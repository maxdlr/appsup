import { Lecture } from '@/entity/Lecture';
import { LectureRepository } from '@/repository/LectureRepository';
import { criteriaToString } from '@/utils/criteriaToString';
import { FindOptionsWhere } from 'typeorm';

const getLecture = async (criteria: FindOptionsWhere<Lecture>) => {
  if (!criteria) {
    throw CrudError(500, 'Criteria needed to get a lecture');
  }

  const lecture = await LectureRepository.findOneBy(criteria);

  if (!lecture) {
    throw CrudError(
      404,
      'Lecture not found with criteria: ' + criteriaToString(criteria)
    );
  }

  return lecture;
};

export default getLecture;
