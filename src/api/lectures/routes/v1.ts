import { Router } from 'express';
import deleteLecture from '../controller/deleteLecture';
import getAllLectures from '../controller/getAllLectures';
import getLecture from '../controller/getLecture';
import putLecture from '../controller/putLecture';
import postLecture from '../controller/postLecture';

const router = Router();

router.get('/', [getAllLectures]);
router.get('/:id', [getLecture]);
router.post('/', [postLecture]);
router.put('/:id', [putLecture]);
router.delete('/:id', [deleteLecture]);

export default router;
