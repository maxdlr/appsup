import { Lecture } from '@/entity/Lecture';
import { LectureRepository } from '@/repository/LectureRepository';
import { CreateRequest } from '@/utils/matchParams';

const createLecture = async (
  lecture: CreateRequest<Lecture>
): Promise<Lecture> => {
  return await LectureRepository.save(lecture);
};

export default createLecture;
