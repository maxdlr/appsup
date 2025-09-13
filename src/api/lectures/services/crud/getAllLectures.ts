import { Lecture } from '@/entity/Lecture';
import { LectureRepository } from '@/repository/LectureRepository';
import { FindOptionsWhere } from 'typeorm';

const getAllLectures = async (criteria?: FindOptionsWhere<Lecture>) => {
  if (!criteria) {
    return await LectureRepository.find();
  }
  return await LectureRepository.findBy(criteria);
};

export default getAllLectures;
