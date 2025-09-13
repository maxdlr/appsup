import { DeleteRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import TeacherService from '../services/TeacherService';
import { Teacher } from '@/entity/Teacher';

// @ts-ignore
const deleteTeacher = async ({ params }: Request, res: Response) => {
  const deleteTeacherParams = validateRequest<DeleteRequest>(
    params,
    'Teacher',
    Teacher.DeleteRequestKeys
  );

  const teacher = await TeacherService.one(deleteTeacherParams);

  await TeacherService.delete({ id: teacher?.id as number });

  return ApiResponse(res, {
    status: 200,
    message: 'Teacher successfully deleted.',
  });
};

export default deleteTeacher;
