import { Student } from '@/entity/Student';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import StudentService from '../services/StudentService';

// @ts-ignore
const getStudent = async ({ params }: Request, res: Response) => {
  const getStudentRequest = validateRequest<GetRequest<Student>>(
    params,
    'Student',
    Student.GetRequestKeys
  );
  const student = await StudentService.one(getStudentRequest);
  return ApiResponse(res, {
    status: 200,
    message: 'Student successfully retrieved.',
    body: student,
  });
};

export default getStudent;
