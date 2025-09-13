import { GetRequest, validateRequest } from '@/utils/matchParams';
import LectureService from '../services/LectureService';
import { Request, Response } from 'express';
import { Lecture } from '@/entity/Lecture';

// @ts-ignore
const getLecture = async ({ params }: Request, res: Response) => {
  const getLectureRequest = validateRequest<GetRequest<Lecture>>(
    params,
    'Lecture',
    Lecture.GetRequestKeys
  );
  const lecture = await LectureService.one(getLectureRequest);
  return ApiResponse(res, {
    status: 200,
    message: 'Lecture successfully retrieved.',
    body: lecture,
  });
};

export default getLecture;
