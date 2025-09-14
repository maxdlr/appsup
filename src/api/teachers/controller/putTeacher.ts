import {
  GetRequest,
  UpdateRequest,
  validateRequest,
} from '@/utils/matchParams';
import { Request, Response } from 'express';
import TeacherService from '../services/TeacherService';
import { Teacher } from '@/entity/Teacher';

// @ts-ignore
const putTeacher = async ({ body, params }: Request, res: Response) => {
  const putTeacherParams = validateRequest<GetRequest<Teacher>>(
    params,
    'Teacher',
    Teacher.GetRequestKeys
  );
  const putTeacherBody = validateRequest<UpdateRequest<Teacher>>(
    body,
    'Teacher'
  );

  await TeacherService.update(putTeacherParams, putTeacherBody);

  const updated = await TeacherService.one(putTeacherParams);

  return ApiResponse(res, {
    status: 200,
    message: 'Teacher successfully updated.',
    body: updated,
  });
};

export default putTeacher;
