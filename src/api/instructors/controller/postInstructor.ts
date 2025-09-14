import { CreateRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import InstructorService from '../services/InstructorService';
import { Instructor } from '@/entity/Instructor';

const postInstructor = async ({ body }: Request, res: Response) => {
  const createInstructorRequest = validateRequest<CreateRequest<Instructor>>(
    body,
    'Instructor',
    Instructor.CreateRequestKeys
  );

  const instructor = new Instructor();
  instructor.firstname = createInstructorRequest.firstname;
  instructor.lastname = createInstructorRequest.lastname;

  const created = await InstructorService.create(instructor);

  return ApiResponse(res, {
    status: 200,
    message: 'Instructor successfully created.',
    body: created,
  });
};

export default postInstructor;
