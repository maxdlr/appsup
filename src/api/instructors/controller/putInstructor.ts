import {
  GetRequest,
  UpdateRequest,
  validateRequest,
} from '@/utils/matchParams';
import { Request, Response } from 'express';
import InstructorService from '../services/InstructorService';
import { Instructor } from '@/entity/Instructor';

// @ts-ignore
const putInstructor = async ({ body, params }: Request, res: Response) => {
  const putInstructorParams = validateRequest<GetRequest<Instructor>>(
    params,
    'Instructor',
    Instructor.GetRequestKeys
  );
  const putInstructorBody = validateRequest<UpdateRequest<Instructor>>(
    body,
    'Instructor'
  );

  await InstructorService.update(putInstructorParams, putInstructorBody);

  const updated = await InstructorService.one(putInstructorParams);

  return ApiResponse(res, {
    status: 200,
    message: 'Instructor successfully updated.',
    body: updated,
  });
};

export default putInstructor;
