import { Student } from '@/entity/Student';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import StudentService from '../services/StudentService';

const getAllStudents = async ({ query }: Request, res: Response) => {
  const getStudentRequest = validateRequest<GetRequest<Student>>(
    query,
    'Student'
  );
  const students = await StudentService.all(getStudentRequest);

  const message = students.length
    ? `${students.length} ${students.length > 1 ? 'students' : 'student'} successfully retrieved`
    : 'Empty';

  return ApiResponse(res, {
    status: 200,
    message,
    body: students,
    count: students.length,
  });
};

export default getAllStudents;
