import { CreateRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import TeacherService from '../services/TeacherService';
import { UserCreateRequestKeys } from '@/entity/AbstractUser';
import { Teacher } from '@/entity/Teacher';

const postTeacher = async ({ body }: Request, res: Response) => {
  const createTeacherRequest = validateRequest<CreateRequest<Teacher>>(
    body,
    'Teacher',
    UserCreateRequestKeys
  );

  const teacher = new Teacher();
  teacher.firstname = createTeacherRequest.firstname;
  teacher.lastname = createTeacherRequest.lastname;

  const created = await TeacherService.create(teacher);

  return ApiResponse(res, {
    status: 200,
    message: 'Teacher successfully created.',
    body: created,
  });
};

export default postTeacher;
