import { Instructor } from '@/entity/Instructor';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import InstructorService from '../services/InstructorService';

// @ts-ignore
const getInstructor = async ({ params }: Request, res: Response) => {
  const getInstructorRequest = validateRequest<GetRequest<Instructor>>(
    params,
    'Instructor',
    Instructor.GetRequestKeys
  );
  const instructor = await InstructorService.one(getInstructorRequest);
  return ApiResponse(res, {
    status: 200,
    message: 'Instructor successfully retrieved.',
    body: instructor,
  });
};

export default getInstructor;
