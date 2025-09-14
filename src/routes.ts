import { Router } from 'express';
import studentRoutes from './api/students/routes/index';
import instructorRoutes from './api/instructors/routes/index';
import lectureRoutes from './api/lectures/routes/index';

const router = Router();

router.use('/students', studentRoutes.v1);
router.use('/instructors', instructorRoutes.v1);
router.use('/lectures', lectureRoutes.v1);

export default router;
