import { Teacher } from '@/entity/Teacher';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import TeacherService from '../services/TeacherService';

// @ts-ignore
const getTeacher = async ({ params }: Request, res: Response) => {
  const getTeacherRequest = validateRequest<GetRequest<Teacher>>(
    params,
    'Teacher',
    Teacher.GetRequestKeys
  );
  const teacher = await TeacherService.one(getTeacherRequest);
  return ApiResponse(res, {
    status: 200,
    message: 'Teacher successfully retrieved.',
    body: teacher,
  });
};

export default getTeacher;
