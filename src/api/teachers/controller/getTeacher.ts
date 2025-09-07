import { GetRequest, validateRequest } from '@/utils/matchParams';
import TeacherService from '../services/TeacherService';
import { Request, Response } from 'express';
import { UserGetRequestKeys } from '@/entity/AbstractUser';
import { Teacher } from '@/entity/Teacher';

// @ts-ignore
const getTeacher = async ({ params }: Request, res: Response) => {
  const getTeacherRequest = validateRequest<GetRequest<Teacher>>(
    params,
    'Teacher',
    UserGetRequestKeys
  );
  const teacher = await TeacherService.one(getTeacherRequest);
  return ApiResponse(res, {
    status: 200,
    message: 'Teacher successfully retrieved.',
    body: teacher,
  });
};

export default getTeacher;
