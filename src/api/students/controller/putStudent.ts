import { Student } from '@/entity/Student';
import {
  GetRequest,
  UpdateRequest,
  validateRequest,
} from '@/utils/matchParams';
import { Request, Response } from 'express';
import StudentService from '../services/StudentService';

// @ts-ignore
const putStudent = async ({ body, params }: Request, res: Response) => {
  const putStudentParams = validateRequest<GetRequest<Student>>(
    params,
    'Student',
    Student.GetRequestKeys
  );
  const putStudentBody = validateRequest<UpdateRequest<Student>>(
    body,
    'Student'
  );

  await StudentService.update(putStudentParams, putStudentBody);

  const student = await StudentService.one(putStudentParams);

  return ApiResponse(res, {
    status: 200,
    message: 'Student successfully updated.',
    body: student,
  });
};

export default putStudent;
