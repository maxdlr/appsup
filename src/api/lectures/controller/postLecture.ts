import { Lecture } from '@/entity/Lecture';
import { CreateRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import LectureService from '../services/LectureService';

const postLecture = async ({ body }: Request, res: Response) => {
  const createLectureRequest = validateRequest<CreateRequest<Lecture>>(
    body,
    'Lecture',
    Lecture.CreateRequestKeys
  );

  const lecture = new Lecture();
  lecture.name = createLectureRequest.name;
  lecture.description = createLectureRequest.description;
  lecture.startDate = createLectureRequest.startDate;
  lecture.endDate = createLectureRequest.endDate;

  const created = await LectureService.create(lecture);

  return ApiResponse(res, {
    status: 200,
    message: 'Lecture successfully created.',
    body: created,
  });
};

export default postLecture;
