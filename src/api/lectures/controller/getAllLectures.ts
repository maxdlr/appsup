import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import LectureService from '../services/LectureService';
import { Lecture } from '@/entity/Lecture';

const getAllLectures = async ({ query }: Request, res: Response) => {
  const getLectureRequest = validateRequest<GetRequest<Lecture>>(
    query,
    'Lecture'
  );
  const lectures = await LectureService.all(getLectureRequest);

  const message = lectures.length
    ? `${lectures.length} ${lectures.length > 1 ? 'lectures' : 'lecture'} successfully retrieved`
    : 'Empty';

  return ApiResponse(res, {
    status: 200,
    message,
    body: lectures,
    count: lectures.length,
  });
};

export default getAllLectures;
