import { Router } from 'express';
import studentRoutes from './api/students/routes/index';
import teacherRoutes from './api/teachers/routes/index';
import lectureRoutes from './api/lectures/routes/index';

const router = Router();

router.use('/students', studentRoutes.v1);
router.use('/teachers', teacherRoutes.v1);
router.use('/lectures', lectureRoutes.v1);

export default router;
