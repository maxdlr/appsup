import { DeleteRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import InstructorService from '../services/InstructorService';
import { Instructor } from '@/entity/Instructor';

// @ts-ignore
const deleteInstructor = async ({ params }: Request, res: Response) => {
  const deleteInstructorParams = validateRequest<DeleteRequest>(
    params,
    'Instructor',
    Instructor.DeleteRequestKeys
  );

  const instructor = await InstructorService.one(deleteInstructorParams);

  await InstructorService.delete({ id: instructor?.id as number });

  return ApiResponse(res, {
    status: 200,
    message: 'Instructor successfully deleted.',
  });
};

export default deleteInstructor;
