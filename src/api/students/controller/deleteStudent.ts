import { DeleteRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import StudentService from '../services/StudentService';
import { UserDeleteRequestKeys } from '@/entity/AbstractUser';

// @ts-ignore
const deleteStudent = async ({ params }: Request, res: Response) => {
  const deleteStudentParams = validateRequest<DeleteRequest>(
    params,
    'Student',
    UserDeleteRequestKeys
  );

  const student = await StudentService.one(deleteStudentParams);

  await StudentService.delete({ id: student?.id as number });

  return ApiResponse(res, {
    status: 200,
    message: 'Student successfully deleted.',
  });
};

export default deleteStudent;
