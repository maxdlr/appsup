import { Router } from 'express';
import deleteInstructor from '../controller/deleteInstructor';
import getAllInstructors from '../controller/getAllInstructors';
import getInstructor from '../controller/getInstructor';
import postInstructor from '../controller/postInstructor';
import putInstructor from '../controller/putInstructor';

const router = Router();

router.get('/', [getAllInstructors]);
router.get('/:id', [getInstructor]);
router.post('/', [postInstructor]);
router.put('/:id', [putInstructor]);
router.delete('/:id', [deleteInstructor]);

export default router;
