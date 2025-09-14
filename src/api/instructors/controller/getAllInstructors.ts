import { Instructor } from '@/entity/Instructor';
import { GetRequest, validateRequest } from '@/utils/matchParams';
import { Request, Response } from 'express';
import InstructorService from '../services/InstructorService';

const getAllInstructors = async ({ query }: Request, res: Response) => {
  const getInstructorRequest = validateRequest<GetRequest<Instructor>>(
    query,
    'Instructor'
  );
  const instructors = await InstructorService.all(getInstructorRequest);

  const message = instructors.length
    ? `${instructors.length} ${instructors.length > 1 ? 'instructors' : 'instructor'} successfully retrieved`
    : 'Empty';

  return ApiResponse(res, {
    status: 200,
    message,
    body: instructors,
    count: instructors.length,
  });
};

export default getAllInstructors;
