import {
  GetRequest,
  UpdateRequest,
  validateRequest,
} from '@/utils/matchParams';
import { Request, Response } from 'express';
import LectureService from '../services/LectureService';
import { Lecture } from '@/entity/Lecture';

// @ts-ignore
const putLecture = async ({ body, params }: Request, res: Response) => {
  const putLectureParams = validateRequest<GetRequest<Lecture>>(
    params,
    'Lecture',
    Lecture.GetRequestKeys
  );
  const putLectureBody = validateRequest<UpdateRequest<Lecture>>(
    body,
    'Lecture'
  );

  await LectureService.update(putLectureParams, putLectureBody);

  const updated = await LectureService.one(putLectureParams);

  return ApiResponse(res, {
    status: 200,
    message: 'Lecture successfully updated.',
    body: updated,
  });
};

export default putLecture;
