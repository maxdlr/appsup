import { LectureRepository } from '@/repository/LectureRepository';
import { DeleteRequest } from '@/utils/matchParams';
import { UpdateResult } from 'typeorm';

const softDeleteLecture = async (
  lecture: DeleteRequest
): Promise<UpdateResult> => {
  return await LectureRepository.softDelete(lecture);
};

export default softDeleteLecture;
