import { Teacher } from '@/entity/Teacher';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import TeacherService from '../services/TeacherService';

const getAllTeachers = async ({ query }: Request, res: Response) => {
  const getTeacherRequest = validateRequest<GetRequest<Teacher>>(
    query,
    'Teacher'
  );
  const teachers = await TeacherService.all(getTeacherRequest);

  const message = teachers.length
    ? `${teachers.length} ${teachers.length > 1 ? 'teachers' : 'teacher'} successfully retrieved`
    : 'Empty';

  return ApiResponse(res, {
    status: 200,
    message,
    body: teachers,
    count: teachers.length,
  });
};

export default getAllTeachers;
