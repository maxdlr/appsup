import { DeleteRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import LectureService from '../services/LectureService';
import { Lecture } from '@/entity/Lecture';

// @ts-ignore
const deleteLecture = async ({ params }: Request, res: Response) => {
  const deleteLectureParams = validateRequest<DeleteRequest>(
    params,
    'Lecture',
    Lecture.DeleteRequestKeys
  );

  const lecture = await LectureService.one(deleteLectureParams);

  await LectureService.delete({ id: lecture?.id as number });

  return ApiResponse(res, {
    status: 200,
    message: 'Lecture successfully deleted.',
  });
};

export default deleteLecture;
