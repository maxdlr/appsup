import { Student } from '@/entity/Student';
import { CreateRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import StudentService from '../services/StudentService';

const postStudent = async ({ body }: Request, res: Response) => {
  const createStudentRequest = validateRequest<CreateRequest<Student>>(
    body,
    'Student',
    Student.CreateRequestKeys
  );

  const student = new Student();
  student.firstname = createStudentRequest.firstname;
  student.lastname = createStudentRequest.lastname;

  const created = await StudentService.create(student);

  return ApiResponse(res, {
    status: 200,
    message: 'Student successfully created.',
    body: created,
  });
};

export default postStudent;
