import { Router } from 'express';
import studentRoutes from './api/students/routes/index';
import teacherRoutes from './api/teachers/routes/index';

const router = Router();

router.use('/students', studentRoutes.v1);
router.use('/teachers', teacherRoutes.v1);

export default router;
