import { Student } from '@/entity/Student';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import StudentService from '../services/StudentService';
import { Request, Response } from 'express';
import { UserGetRequestKeys } from '@/entity/AbstractUser';

// @ts-ignore
const getStudent = async ({ params }: Request, res: Response) => {
  const getStudentRequest = validateRequest<GetRequest<Student>>(
    params,
    'Student',
    UserGetRequestKeys
  );
  const student = await StudentService.one(getStudentRequest);
  return ApiResponse(res, {
    status: 200,
    message: 'Student successfully retrieved.',
    body: student,
  });
};

export default getStudent;
