import { Router } from 'express';
import getAllStudents from '../controller/getAllStudents';
import getStudent from '../controller/getStudent';
import postStudent from '../controller/postStudent';
import putStudent from '../controller/putStudent';
import deleteStudent from '../controller/deleteStudent';

const router = Router();

router.get('/', [getAllStudents]);
router.get('/:id', [getStudent]);
router.post('/', [postStudent]);
router.put('/:id', [putStudent]);
router.delete('/:id', [deleteStudent]);

export default router;
