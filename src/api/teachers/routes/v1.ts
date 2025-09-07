import { Router } from 'express';
import deleteTeacher from '../controller/deleteTeacher';
import getAllTeachers from '../controller/getAllTeachers';
import getTeacher from '../controller/getTeacher';
import postTeacher from '../controller/postTeacher';
import putTeacher from '../controller/putTeacher';

const router = Router();

router.get('/', [getAllTeachers]);
router.get('/:id', [getTeacher]);
router.post('/', [postTeacher]);
router.put('/:id', [putTeacher]);
router.delete('/:id', [deleteTeacher]);

export default router;
